import Rock from './rock';
import Paper from './paper';
import Scissors from './scissors';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d'); 

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

var lastTime = 0;

let rock = new Rock(GAME_WIDTH, GAME_HEIGHT);
let paper = new Paper(GAME_WIDTH, GAME_HEIGHT);
let scissors = new Scissors(GAME_WIDTH, GAME_HEIGHT);
// new InputHandler(GAME_WIDTH, GAME_HEIGHT);

function loop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    rock.draw(ctx);
    paper.draw(ctx);
    scissors.draw(ctx);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);