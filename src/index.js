import * as PIXI from 'pixi.js'
import style from './assets/styles/main.styl'
import cat from './assets/images/cat.png'

class Main {
    constructor() {
        const app = new PIXI.Application();
        document.getElementById('app').appendChild(app.view);

        app.renderer.view.style.position = 'absolute';
        app.renderer.view.style.display = 'block';
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);

        PIXI.loader
            .add([
                './assets/images/cat.png'
            ])
            .load(() => this.setup(app))
    }

    setup(app) {
        let cat = new PIXI.Sprite(PIXI.loader.resources["./assets/images/cat.png"].texture);
        app.stage.addChild(cat);
    }
}

const main = new Main();
