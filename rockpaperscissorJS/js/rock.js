export default class Rock {

    constructor(GAMEWIDTH, GAMEHEIGHT) {
        this.image = document.getElementById('img_rock');
        this.width = 120;
        this.height = 120;
        this.position = {
            x: GAMEWIDTH / 6 - this.width / 2,
            y: GAMEHEIGHT / 2 - this.height / 2,
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {

    }

}