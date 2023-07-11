import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-download-content',
  templateUrl: './download-content.component.html',
  styleUrls: ['./download-content.component.scss']
})
export class DownloadContentComponent implements OnInit {
  public title: string = "Download";
  public white: boolean = true;
  public tag: string = "See what I see, feel what I feel";

  fileUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const filePath = './assets/files/game/Disorder.rar';
    this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(filePath);
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = this.fileUrl.toString();
    link.download = 'Disorder.rar';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
