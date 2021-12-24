import { Component, ContentChildren, QueryList } from '@angular/core';
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

  scrollTo(item: CarouselItemComponent): void {
    const element = item.elementRef.nativeElement as HTMLElement
    element.scrollIntoView({block: 'nearest'})   
  }

  scrollToNext(): void {
    let currentItem: CarouselItemComponent | undefined 
    let currentIndex: number | undefined

    this.items.forEach((item, index) => {
      if (item.visible) {
        currentItem = item
        currentIndex = index
      }
    })

    if (!currentItem || currentItem === this.items.last) {
      return this.scrollTo(this.items.first)
    }

    let nextItem = this.items.get(currentIndex! + 1)
    this.scrollTo(nextItem!)
  }
}
