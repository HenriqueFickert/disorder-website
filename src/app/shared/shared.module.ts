import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from '../views/home/components/home-banner/home-banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';
import { DarkContentComponent } from './dark-content/dark-content.component';
import { WhiteContentComponent } from './white-content/white-content.component';
import { BannerTitleComponent } from './banner-title/banner-title.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    HomeBannerComponent,
    TitleComponent,
    FadeInComponent,
    DarkContentComponent,
    WhiteContentComponent,
    BannerTitleComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HomeBannerComponent,
    TitleComponent,
    FadeInComponent,
    DarkContentComponent,
    WhiteContentComponent,
    BannerTitleComponent,
    TagComponent
  ]
})
export class SharedModule { }
