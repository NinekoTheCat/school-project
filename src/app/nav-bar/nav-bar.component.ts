import { Component } from '@angular/core';
import { GameStateService, playerStateToChar } from '../GameStateService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor (public gameStateService: GameStateService){}
  restartGame(){
    this.gameStateService.restartGame();
  }
  currentTurnTaker() {
    return  playerStateToChar(this.gameStateService.turnTaker);
  }
  winnerExists() {
    return this.gameStateService.getWinner !== null
  }
}
