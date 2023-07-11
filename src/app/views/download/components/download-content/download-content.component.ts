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


  downloadFile() {
    const fileUrl = './assets/files/game/Disorder.rar';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Disorder.rar';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
