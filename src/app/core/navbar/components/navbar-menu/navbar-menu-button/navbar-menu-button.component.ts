import { Component, Input } from '@angular/core';
import { MenuButton } from 'src/app/models/menu-button';

@Component({
  selector: 'app-navbar-menu-button',
  templateUrl: './navbar-menu-button.component.html',
  styleUrls: ['./navbar-menu-button.component.scss']
})
export class NavbarMenuButtonComponent {
  @Input() public menuButton!: MenuButton;
}
