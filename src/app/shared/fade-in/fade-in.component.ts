import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('500ms ease-in')),
    ])
  ]
})
export class FadeInComponent {
  @Input() offset = 100;
  state = 'hidden';

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition + window.innerHeight > componentPosition + this.offset) {
      this.state = 'visible';
    }
  }
}
