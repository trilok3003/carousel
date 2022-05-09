import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective {
  constructor(public template: TemplateRef<any>) {}
}
