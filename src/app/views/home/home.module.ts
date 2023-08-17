import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { FadeinDirective } from 'src/app/directives/fadein.directive';



@NgModule({
  declarations: [
    HomeComponent,
    VideoContentComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
