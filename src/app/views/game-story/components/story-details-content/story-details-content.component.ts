import { Component } from '@angular/core';

@Component({
  selector: 'app-story-details-content',
  templateUrl: './story-details-content.component.html',
  styleUrls: ['./story-details-content.component.scss']
})
export class StoryDetailsContentComponent {
  public title: string = "Surviving in an Oppressive World";
  public tag: string = "Feel what I feel, see what I see";
}
