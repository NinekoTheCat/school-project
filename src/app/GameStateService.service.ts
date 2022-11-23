import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private winner: PlayerState | null = null
  private restart$: BehaviorSubject<undefined> = new BehaviorSubject(undefined)
  private currentPlayer: PlayerState.Circle | PlayerState.Cross = PlayerState.Cross
  constructor() { }

  get getWinner() {
    return this.winner
  }
  get restartEvent$(): Observable<undefined> {
    return this.restart$
  }
  set turnTaker(turner: PlayerState.Circle | PlayerState.Cross) {
    this.currentPlayer = turner
  }
  get turnTaker() {
    return this.currentPlayer
  }

  switchTurn() {
    switch (this.turnTaker) {
      case PlayerState.Circle:
        this.turnTaker = PlayerState.Cross
        break;

      default:
        this.turnTaker = PlayerState.Circle
        break;
    }
  }
  set setWinner(winner: PlayerState.Circle | PlayerState.Cross) {
    this.winner = winner
  }

  restartGame() {
    this.restart$.next(undefined);
    this.winner = null;
  }
}

export enum PlayerState {
  Cross,
  Circle,
  None
}

export function playerStateToChar(state: PlayerState) {
  switch (state) {
    case PlayerState.Circle:
      return 'O';
    case PlayerState.Cross:
      return 'X';
    default:
      return ' ';
  }
}