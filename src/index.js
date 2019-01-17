import * as PIXI from 'pixi.js'
import style from './styles/main.styl'

class Main {
    constructor() {
        const app = new PIXI.Application();
        document.getElementById('app').appendChild(app.view);

        app.renderer.view.style.position = 'absolute';
        app.renderer.view.style.display = 'block';
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);
    }
}

const main = new Main();
