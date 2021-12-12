import { Component, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>
  constructor(public media: MediaObserver) {}
}
