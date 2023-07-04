import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamBannerComponent } from './team-banner/team-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeamComponent,
    TeamBannerComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ]
})
export class TeamModule { }
