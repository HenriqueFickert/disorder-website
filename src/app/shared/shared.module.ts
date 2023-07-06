import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';

@NgModule({
  declarations: [
    BannerComponent,
    TitleComponent,
    FadeInComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    TitleComponent,
    FadeInComponent
  ]
})
export class SharedModule { }
