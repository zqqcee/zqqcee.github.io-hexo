import cursor from "https://unpkg.com/ipad-cursor@latest"
import { config } from "./config.js"
//TODO: bindCursor
//TODO: setConfig
//TODO: setStyle
//TODO: 动画动效
//TODO: 函数整合
//...


const init = () => {
    document.querySelectorAll('*').forEach(_ => _.style.cursor = 'none');
    Object.keys(config).forEach(query => {
        bindAttr(query, config[query]);
    })
    cursor.initCursor({
        normalStyle: {
            background: '#ffcc00',
        },
        textStyle: {
            background: '#ffcc00'
        },
    })
}



const setAttr = (item, type, style) => {
    item.setAttribute('data-cursor', type);
    if (style) {
        item.setAttribute('data-cursor-style'.style);
    }
}

const bindAttr = (query, cfg) => {
    const { type, style } = cfg;
    const selPath = query.split('>');
    if (selPath.length > 2) {
        return;
    }
    if (cfg.children) {
        bindAttrNested(query, cfg);
    } else if (selPath.length == 2) {
        document.querySelectorAll(selPath[0])?.forEach(p => {
            p.querySelectorAll(selPath[1])?.forEach(c => {
                setAttr(c, type, style);
            })
        })
    } else {
        document.querySelectorAll(query)?.forEach(_ => {
            setAttr(_, type, style);
        })
    }

}

const bindAttrNested = (query, cfg) => {
    const { type, style } = cfg;
    cfg = cfg.children;
    query = Object.keys(cfg)[0];
    document.querySelectorAll(query)?.forEach(p => {
        setAttr(p, type, style);
        bindAttr(query, cfg[query]);
    })
}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('div.post-body').setAttribute('data-cursor', 'text')
    document.querySelectorAll('a.post-title-link').forEach(_ => _.setAttribute('data-cursor', 'block'));

    document.querySelectorAll('a.btn').forEach(_ => _.setAttribute('data-cursor', 'block'));
    document.querySelector('a.brand').setAttribute('data-cursor', 'block');
    document.querySelectorAll('p').forEach(_ => _.setAttribute('data-cursor', 'text'));
    document.querySelector('div.site-description')

    document.querySelector('ul.motion-element')?.querySelectorAll('li').forEach(_ => _.setAttribute('data-cursor', 'block'));

    //侧边栏
    document.querySelector('img').style.userSelect = 'none'
    document.querySelector('div.sidebar-inner').setAttribute('data-cursor', 'text');
    document.querySelector('div.sidebar-inner').querySelectorAll('a').forEach(_ => _.setAttribute('data-cursor', 'block'));

    document.querySelector('div.post-body')?.querySelectorAll('a').forEach(_ => _.setAttribute('data-cursor', 'block'))
    document.querySelectorAll('a.nav-link').forEach(_ => _.setAttribute('data-cursor', 'block'));
    init();

})

