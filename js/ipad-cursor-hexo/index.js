// import cursor from "https://unpkg.com/ipad-cursor@latest"
import init from "https://unpkg.com/ipad-cursor-hexo@latest";

import { config, cursorConfig } from "./config.js"
const effect = () => {
    document.querySelector('img').style.userSelect = 'none'
}


document.addEventListener('DOMContentLoaded', () => init(config, cursorConfig));