import { Component } from '@angular/core';
import { GameStateService } from '../GameStateService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  constructor (public gameStateService: GameStateService){}
  restartGame(){
    this.gameStateService.restartGame()
  }
}
