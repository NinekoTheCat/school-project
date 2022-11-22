import { state } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { PlayerState } from '../GameStateService.service';

@Component({
  selector: 'app-square',
  template: `
      <button mat-flat-button color="primary" class="app-square-button" [disabled]="disable">
      {{ownedByPlayerChar}}
      </button>
      
 
  `,
  styleUrls: ['./square.component.sass']
})
export class SquareComponent {
  @Input('owned_by')
  ownedByPlayer!: PlayerState;
  @Input('disable_me')
  disableMe: boolean = false;
  get ownedByPlayerChar() {
    return playerStateToChar(this.ownedByPlayer)
  }
  get disable(): boolean {
    if (this.disableMe === true)
      return true;

    return this.ownedByPlayer !== PlayerState.None
  }
}

function playerStateToChar(state: PlayerState) {
  switch (state) {
    case PlayerState.Circle:
      return 'O';
    case PlayerState.Cross:
      return 'X';
    default:
      return ' ';
  }
}




