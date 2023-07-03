import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameStoryComponent } from './game-story.component';

const routes: Routes = [
  { path: '', component: GameStoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameStoryRoutingModule { }
