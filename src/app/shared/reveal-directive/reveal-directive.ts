import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true,
})
export class RevealDirective {
  constructor(private el: ElementRef) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('reveal-active');
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(this.el.nativeElement);
  }
}
