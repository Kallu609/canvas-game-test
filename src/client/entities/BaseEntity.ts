import Game from '../Game';

class BaseEntity {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  x: number;
  y: number;
  xvel: number;
  yvel: number;
  height: number;
  width: number;

  constructor(public game: Game) {
    this.canvas = game.canvas;
    this.ctx = game.ctx;
    
    this.x = 0;
    this.y = 0;
    this.xvel = 0;
    this.yvel = 0;
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  // tslint:disable:no-empty
  update(): void {}
  draw(): void {}
  // tslint:enable:no-empty
}

export default BaseEntity;