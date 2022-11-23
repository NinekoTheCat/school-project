import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameStateService, PlayerState } from '../GameStateService.service';
import { WinnerDialogueComponent } from '../winner-dialogue/winner-dialogue.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent {
  constructor(public gameStateService: GameStateService, public dialogue: MatDialog) { }
  public ngOnInit() {
    this.gameStateService.restartEvent$.subscribe(() => {
      this.squares = new Array(9).fill(PlayerState.None);
    })
  }
  squares: PlayerState[] = new Array(9).fill(PlayerState.None);
  circleIsNext: boolean = false;

  get player() {
    return this.circleIsNext ? PlayerState.Circle : PlayerState.Cross
  }

  get winnerExists() {
    return this.gameStateService.getWinner !== null
  }

  makeMove(index: number) {

    if (index > 8 || index < 0)
      throw new Error("invalid square clicked");
    if (this.squares[index] !== PlayerState.None || this.winnerExists)
      return;
    this.circleIsNext = !this.circleIsNext;
    this.squares.splice(index, 1, this.player);
    let winner = this.calculateWinner();
    if (winner === null)
      return;
    this.gameStateService.setWinner = winner;
    this.openWinDialogue()
  }

  openWinDialogue() {
    this.dialogue.open (WinnerDialogueComponent)
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] !== PlayerState.None &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}

