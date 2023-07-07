import { Component } from '@angular/core';

@Component({
  selector: 'app-story-content',
  templateUrl: './story-content.component.html',
  styleUrls: ['./story-content.component.scss']
})
export class StoryContentComponent {
  public title: string = "FUMETSU";
  public white: boolean = true;
  public tag: string = "FRIENDSHIP MAKES THE PROCESS EASY";
}
