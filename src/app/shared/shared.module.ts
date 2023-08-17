import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from '../views/home/components/home-banner/home-banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { DarkContentComponent } from './dark-content/dark-content.component';
import { WhiteContentComponent } from './white-content/white-content.component';
import { BannerTitleComponent } from './banner-title/banner-title.component';
import { TagComponent } from './tag/tag.component';
import { FadeinDirective } from '../directives/fadein.directive';

@NgModule({
  declarations: [
    HomeBannerComponent,
    TitleComponent,
    DarkContentComponent,
    WhiteContentComponent,
    BannerTitleComponent,
    TagComponent,
    FadeinDirective
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
    DarkContentComponent,
    WhiteContentComponent,
    BannerTitleComponent,
    TagComponent,
    FadeinDirective
  ]
})
export class SharedModule { }
