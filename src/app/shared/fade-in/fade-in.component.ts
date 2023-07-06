import { Component, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('500ms ease-in')),
    ])
  ]
})
export class FadeInComponent {
  @Input() offset = 100;
  state = 'hidden';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight - this.offset;

    if (scrollPosition > componentPosition) {
      this.state = 'visible';
    }
  }
}
