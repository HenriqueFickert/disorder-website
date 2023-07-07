import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  templateUrl: './banner-title.component.html',
  styleUrls: ['./banner-title.component.scss']
})
export class BannerTitleComponent {
  @Input() public title!: string;
}
