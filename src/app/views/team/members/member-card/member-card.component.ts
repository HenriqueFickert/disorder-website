// import { Component, Input } from '@angular/core';
import { member } from 'src/app/models/member';
import { Component, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', animate('500ms ease-in')),
    ])
  ]
})
export class MemberCardComponent {
  @Input() public member!: member;

  state = 'hidden';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (scrollPosition > componentPosition) {
      this.state = 'visible';
    }
  }
}
