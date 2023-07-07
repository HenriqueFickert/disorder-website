import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamBannerComponent } from './components/team-banner/team-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FumetsuContentComponent } from './components/fumetsu-content/fumetsu-content.component';
import { MembersContentComponent } from './components/members-content/members-content.component';
import { MemberCardComponent } from './components/members-content/member-card/member-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TeamComponent,
    TeamBannerComponent,
    FumetsuContentComponent,
    MembersContentComponent,
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
