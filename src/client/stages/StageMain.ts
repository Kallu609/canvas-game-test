import Player from '../entities/Player';
import Game from '../Game';
import BaseStage from './BaseStage';

class StageMain extends BaseStage {
  player: Player;
  
  constructor(public game: Game) {
    super(game);
    this.initialize();
  }

  initialize(): void {
    this.player = new Player(this.game);
    this.player.setPosition(Math.floor(this.canvas.width / 2), Math.floor(this.canvas.height / 2));
    
    this.entities.push(this.player);
  }
}

export default StageMain;