import cursor from "https://unpkg.com/ipad-cursor@latest"
//TODO: bindCursor
//TODO: setConfig
//TODO: setStyle
//TODO: 动画动效
//TODO: 函数整合
//...

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('li.menu-item').forEach(_ => {
        _.setAttribute('data-cursor', 'block');
        // _.setAttribute('data-cursor-style', 'radius: 50%')
    });
    document.querySelectorAll('article').forEach(_ => {
        _.setAttribute('data-cursor', 'text');
        _.querySelectorAll('a').forEach(_ => _.setAttribute('data-cursor', 'block'))
    });
    document.querySelector('div.post-body').setAttribute('data-cursor', 'text')
    document.querySelectorAll('a.post-title-link').forEach(_ => _.setAttribute('data-cursor', 'block'));

    document.querySelectorAll('a.btn').forEach(_ => _.setAttribute('data-cursor', 'block'));
    document.querySelector('a.brand').setAttribute('data-cursor', 'block');
    document.querySelectorAll('p').forEach(_ => _.setAttribute('data-cursor', 'text'));
    document.querySelector('div.site-description')
    document.querySelectorAll('*').forEach(_ => _.style.cursor = 'none');
    document.querySelector('ul.motion-element')?.querySelectorAll('li').forEach(_ => _.setAttribute('data-cursor', 'block'));

    //侧边栏
    document.querySelector('img').style.userSelect = 'none'
    document.querySelector('div.sidebar-inner').setAttribute('data-cursor', 'text');
    document.querySelector('div.sidebar-inner').querySelectorAll('a').forEach(_ => _.setAttribute('data-cursor', 'block'));


    document.querySelector('div.post-body')?.querySelectorAll('a').forEach(_ => _.setAttribute('data-cursor', 'block'))
    document.querySelectorAll('a.nav-link').forEach(_ => _.setAttribute('data-cursor', 'block'));
    cursor.initCursor({
        normalStyle: {
            background: '#ffcc00',
        },
        textStyle: {
            background: '#ffcc00'
        },


    })

})

