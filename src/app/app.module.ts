import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import {MatCardModule} from '@angular/material/card';
import { WinnerDialogueComponent } from './winner-dialogue/winner-dialogue.component'; 
import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
    declarations: [
        AppComponent,
        SquareComponent,
        GameBoardComponent,
        NavBarComponent,
        WinnerDialogueComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule
    ]
})
export class AppModule { }
