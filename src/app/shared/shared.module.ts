import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class SharedModule { }
