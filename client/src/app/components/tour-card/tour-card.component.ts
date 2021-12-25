import { Component, Input } from '@angular/core';
import { IJourney } from 'src/app/models/journey.model';

type variant = 'common' | 'expanded'

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent {
  @Input() journey!: IJourney
  @Input() variant: variant = 'common'
}
