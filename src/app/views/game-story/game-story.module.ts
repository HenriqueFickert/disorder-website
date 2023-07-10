import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStoryRoutingModule } from './game-story-routing.module';
import { GameStoryComponent } from './game-story.component';
import { StoryContentComponent } from './components/story-content/story-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameStoryBannerComponent } from './components/game-story-banner/game-story-banner.component';
import { StoryDetailsContentComponent } from './components/story-details-content/story-details-content.component';


@NgModule({
  declarations: [
    GameStoryComponent,
    StoryContentComponent,
    GameStoryBannerComponent,
    StoryDetailsContentComponent
  ],
  imports: [
    CommonModule,
    GameStoryRoutingModule,
    SharedModule
  ]
})
export class GameStoryModule { }
