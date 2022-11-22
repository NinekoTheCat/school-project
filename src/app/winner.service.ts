import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  private winner: PlayerState | null= null
  constructor() { }
}

  export enum PlayerState {
    Cross,
    Circle,
    None
  }