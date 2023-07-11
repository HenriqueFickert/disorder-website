import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { DownloadBannerComponent } from './components/download-banner/download-banner.component';
import { DownloadContentComponent } from './components/download-content/download-content.component';
import { DownloadDetailsContentComponent } from './components/download-details-content/download-details-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { DownloadInstructionsComponent } from './components/download-content/download-instructions/download-instructions.component';
import { DownloadButtonComponent } from './components/download-content/download-button/download-button.component';
import { DownloadImageComponent } from './components/download-content/download-image/download-image.component';

@NgModule({
  declarations: [
    DownloadComponent,
    DownloadBannerComponent,
    DownloadContentComponent,
    DownloadDetailsContentComponent,
    DownloadInstructionsComponent,
    DownloadButtonComponent,
    DownloadImageComponent
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class DownloadModule { }
