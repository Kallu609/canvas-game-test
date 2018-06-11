import Game from '../Game';
import BaseEntity from './BaseEntity';

const KEYCODES = {
  'w': 87, 'a': 65, 's': 83, 'd': 68 
};

class Player extends BaseEntity {
  speed: number;
  
  constructor(public game: Game) {
    super(game);
    this.speed = 3;
    this.height = 50;
    this.width = 50;
  }

  update() {
    const upKey = this.game.keys[KEYCODES.w];
    const downKey = this.game.keys[KEYCODES.s];
    const leftKey = this.game.keys[KEYCODES.a];
    const rightKey = this.game.keys[KEYCODES.d];
    
    this.xvel = 0;
    this.yvel = 0;

    if (leftKey && rightKey) {
      this.xvel = 0;
    } else if (leftKey) {
      this.xvel = -this.speed;
    } else if (rightKey) {
      this.xvel = this.speed;
    }
    
    if (upKey && downKey) {
      this.yvel = 0;
    } else if (upKey) {
      this.yvel = -this.speed;
    } else if (downKey) {
      this.yvel = this.speed;
    }

    this.x += this.xvel;
    this.y += this.yvel;
    
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width + this.xvel > this.canvas.width) {
      this.x = this.canvas.width - this.width;
    }

    if (this.y + this.yvel < 0) {
      this.y = 0;
    }
    if (this.y + this.height + this.yvel > this.canvas.height) {
      this.y = this.canvas.height - this.height;
    }
  }

  draw() {
    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(0.25, 'red');
    gradient.addColorStop(0.5, 'green');
    gradient.addColorStop(0.75, 'blue');
    gradient.addColorStop(1, 'white');

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x - 2, this.y - 2, this.width + 4, this.height + 4);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.font = '14px Courier';
    this.ctx.fillText(`X: ${this.x}`, 10, 20);
    this.ctx.fillText(`Y: ${this.y}`, 10, 40);
  }
}

export default Player;