import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DisorderNavLogoComponent } from './navbar/disorder-nav-logo/disorder-nav-logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialMediaComponent,
    DisorderNavLogoComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
