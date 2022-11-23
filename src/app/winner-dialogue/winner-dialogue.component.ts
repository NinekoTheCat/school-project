import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { GameStateService, PlayerState, playerStateToChar } from '../GameStateService.service';

@Component({
  selector: 'app-winner-dialogue',
  templateUrl: './winner-dialogue.component.html',
  styleUrls: ['./winner-dialogue.component.sass']
})
export class WinnerDialogueComponent {
  @ViewChild("confetti_canvas")
  canvas!: ElementRef<HTMLCanvasElement>
  winner!: string
  constructor (public gameStateService: GameStateService){}
  public ngOnInit() {
    this.winner = playerStateToChar(this.gameStateService.getWinner!)
  }
  ngAfterViewInit(): void {
    let canvas = this.canvas.nativeElement;
    let confettiCannon = confetti.create(canvas,{ resize: true });
    fireConfetti(confettiCannon);
  }
  restartGame(){
    this.gameStateService.restartGame()
  }
}

function fireConfetti(cannon : confetti.CreateTypes)  {
  
  var defaults = {
    origin: { y: 1, x:0.5 }
  };

  let count = 200;
 let fire = (particleRatio: number, opts: any)=>{
  cannon(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }
  
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
