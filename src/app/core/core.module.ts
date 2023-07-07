import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DisorderNavLogoComponent } from './navbar/disorder-nav-logo/disorder-nav-logo.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarMenuButtonComponent } from './navbar/navbar-menu/navbar-menu-button/navbar-menu-button.component';
import { NavbarMenuComponent } from './navbar/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialMediaComponent,
    DisorderNavLogoComponent,
    NavbarMenuButtonComponent,
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
