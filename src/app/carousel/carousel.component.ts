import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CarouselDirective } from './carousel.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ContentChildren(CarouselDirective) items : QueryList<CarouselDirective>;
  constructor() { }

  ngOnInit() {
  }

}