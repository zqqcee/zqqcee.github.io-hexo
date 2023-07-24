export const config = {
    "ul#menu>li.menu-item": {
        type: 'block',
    },
    "article": {
        type: 'text',
        children: {
            "a": {
                type: 'block',
            }
        }
    },
    "div.post-body": {
        type: 'text'
    },
    "ul.motion-element>li": {
        type: "block"
    },
    //sidebar
    "div.sidebar-inner": {
        type: 'text'
    },
    "p": {
        type: 'text'
    },
    "a": {
        type: 'block'
    },
};

export const cursorConfig = {
    normalStyle: {
        background: '#ffcc00',
    },
    textStyle: {
        background: '#ffcc00'
    },
}