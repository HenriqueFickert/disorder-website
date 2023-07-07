import { Component } from '@angular/core';
import { MenuButton } from 'src/app/models/menu-button';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent {

  public menuButtons: MenuButton[] = [
    {
      name: "GAME STORY",
      link: "/game-story"
    },
    {
      name: "DOWNLOAD",
      link: "/download"
    }
    ,
    {
      name: "TEAM",
      link: "/team"
    }
  ];
}
