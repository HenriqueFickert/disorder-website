import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterSocialMedia } from './footer/components/footer-social-media/footer-social-media.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarDisorderLogo } from './navbar/components/navbar-disorder-logo/navbar-disorder-logo.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarMenuButtonComponent } from './navbar/components/navbar-menu/navbar-menu-button/navbar-menu-button.component';
import { NavbarMenuComponent } from './navbar/components/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FooterSocialMedia,
    NavbarDisorderLogo,
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
