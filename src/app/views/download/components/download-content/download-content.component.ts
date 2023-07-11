import { Component } from '@angular/core';

@Component({
  selector: 'app-download-content',
  templateUrl: './download-content.component.html',
  styleUrls: ['./download-content.component.scss']
})
export class DownloadContentComponent {
  public title: string = "Download";
  public white: boolean = true;
  public tag: string = "See what I see, feel what I feel";
}
