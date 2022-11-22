import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private winner: PlayerState | null= null
  private restart$: BehaviorSubject<undefined> = new BehaviorSubject(undefined)
  constructor() { }

  get getWinner() {
    return this.winner
  }
  get restartEvent$() : Observable<undefined> {
    return this.restart$
  }

  set setWinner(winner: PlayerState){ 
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