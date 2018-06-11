import BaseStage from './stages/BaseStage';
import StageMain from './stages/StageMain';

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  keys: object;

  now: number;
  then: number;
  interval: number;
  delta: number;

  stage: BaseStage;

  constructor() {
    this.initialize();
    this.eventListener();
    this.gameLoop();
  }
  
  initialize(): void {
    this.canvas = document.querySelector('#game') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = 600;
    this.canvas.height = 480;
    this.keys = {};

    this.then = Date.now();
    this.interval = 1000 / 60; // 60 is FPS

    this.stage = new StageMain(this);
  }
  
  gameLoop = () => {
    this.now = Date.now();
    this.delta = this.now - this.then;
    
    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);

      this.update();
      this.draw();
    }
      
    requestAnimationFrame(this.gameLoop);
  }

  eventListener(): void {
    window.onblur = () => {
      Object.keys(this.keys).forEach(key => this.keys[key] = false);
    };

    window.onkeyup = e => this.keys[e.keyCode] = false;
    window.onkeydown = e => this.keys[e.keyCode] = true;
  }

  update(): void {
    for (const entity of this.stage.entities) {
      entity.update();
    }
  }

  draw(): void {
    this.ctx.fillStyle = '#cecece';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    for (const entity of this.stage.entities) {
      entity.draw();
    }
  }
}

export default Game;