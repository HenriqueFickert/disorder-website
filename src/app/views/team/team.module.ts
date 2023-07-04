import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamBannerComponent } from './team-banner/team-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FumetsuContentComponent } from './fumetsu-content/fumetsu-content.component';
import { MembersComponent } from './members/members.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TeamComponent,
    TeamBannerComponent,
    FumetsuContentComponent,
    MembersComponent,
    MemberCardComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class TeamModule { }
