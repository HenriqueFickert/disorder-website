import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'game-story', loadChildren: () => import('./views/game-story/game-story.module').then(m => m.GameStoryModule)
  },
  {
    path: 'download', loadChildren: () => import('./views/download/download.module').then(m => m.DownloadModule)
  },
  {
    path: 'team', loadChildren: () => import('./views/team/team.module').then(m => m.TeamModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
