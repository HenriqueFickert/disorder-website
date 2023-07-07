import { Component } from '@angular/core';

@Component({
  selector: 'app-fumetsu-content',
  templateUrl: './fumetsu-content.component.html',
  styleUrls: ['./fumetsu-content.component.scss']
})
export class FumetsuContentComponent {
  public title: string = "FUMETSU";
  public white: boolean = true;
  public tag: string = "FRIENDSHIP MAKES THE PROCESS EASY";
}
