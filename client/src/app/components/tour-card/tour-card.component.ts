import { Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IJourney } from 'src/app/models/journey.model';

type variant = 'common' | 'expanded'

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent {
  constructor(public readonly media: MediaObserver) {}
  
  @Input() journey!: IJourney
  @Input() variant: variant = 'common'
}
