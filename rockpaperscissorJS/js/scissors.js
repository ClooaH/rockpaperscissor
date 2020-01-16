export default class Scissors {

    constructor(GAMEWIDTH, GAMEHEIGHT) {
        this.image = document.getElementById('img_scissors');
        this.width = 120;
        this.height = 120;
        this.position = {
            x: GAMEWIDTH / 3 - this.width / 2 + 2 * GAMEWIDTH / 4,
            y: GAMEHEIGHT / 2 - this.height / 2,
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    }

}