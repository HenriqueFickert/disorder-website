import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFadein]'
})
export class FadeinDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input() offset = 100;
  isVisible = false;

  ngOnInit() {
    this.checkVisibility();
    this.renderer.addClass(this.elementRef.nativeElement, 'fade-in-container');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition + window.innerHeight > componentPosition + this.offset && !this.isVisible) {
      this.isVisible = true;
      this.renderer.addClass(this.elementRef.nativeElement, 'visible');
    }
  }
}
