import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  visible = false
  constructor(public elementRef: ElementRef) {}

  onSight(event: boolean) {
    this.visible = event
  }
}
