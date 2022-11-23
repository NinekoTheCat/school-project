import { Component, Input } from '@angular/core';
import { GameStateService, PlayerState, playerStateToChar } from '../GameStateService.service';

@Component({
  selector: 'app-winner-dialogue',
  templateUrl: './winner-dialogue.component.html',
  styleUrls: ['./winner-dialogue.component.sass']
})
export class WinnerDialogueComponent {
  winner!: string
  constructor (public gameStateService: GameStateService){}
  public ngOnInit() {
    this.winner = playerStateToChar(this.gameStateService.getWinner!)
  }
  restartGame(){
    this.gameStateService.restartGame()
  }
}
