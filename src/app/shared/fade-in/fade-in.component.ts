import { Component, Input, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.scss']
})
export class FadeInComponent implements OnInit {
  @Input() offset = 100;
  isVisible = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition + window.innerHeight > componentPosition + this.offset) {
      this.isVisible = true;
    }
  }
}
