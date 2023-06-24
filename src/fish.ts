import * as PIXI from "pixi.js"

export class Fish extends PIXI.Sprite {
    
    private alive:boolean = true
    private deadTexture:PIXI.Texture

    constructor(texture: PIXI.Texture, deadTexture: PIXI.Texture) {
        super(texture)
        this.deadTexture = deadTexture
        this.x = Math.random() * 900
        this.y = Math.random() * 500
        this.scale.set(0.5)
        this.tint = Math.random() * 0xFFFFFF

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.fishKilled())
    }

    public update(delta:number) {
        if (this.x <= -50) {
            this.x = 850
        } else {
            if (this.alive == true) {
                this.x -= 5 * delta
            } else {
                if (this.y <= 410) {
                    this.y += 5 * delta
                }
            }
        }
    }

    public fishKilled() {
        this.alive = false
        this.texture = this.deadTexture
    }
}