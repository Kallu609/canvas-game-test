import BaseEntity from '../entities/BaseEntity';
import Game from '../Game';

class BaseStage  {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  entities: Array<BaseEntity>;
  
  constructor(public game: Game) {
    this.canvas = game.canvas;
    this.ctx = game.ctx;
    this.entities = [];
  }
}

export default BaseStage;