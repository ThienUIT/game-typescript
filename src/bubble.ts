import * as PIXI from "pixi.js"

export class Bubble extends PIXI.Sprite {
    
    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = Math.random() * 800
        this.y = Math.random() * 450
        this.scale.set(0.5)
    }

    public update(delta:number) {
        if (this.y <= 0) {
            this.y = 450
        } else {
            this.y -= 5 * delta
        }
    }
}