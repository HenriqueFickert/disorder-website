import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStoryRoutingModule } from './game-story-routing.module';
import { GameStoryComponent } from './game-story.component';


@NgModule({
  declarations: [
    GameStoryComponent
  ],
  imports: [
    CommonModule,
    GameStoryRoutingModule
  ]
})
export class GameStoryModule { }
