import { Component, Input } from '@angular/core';

type variant = 'common' | 'expanded'

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent {
  @Input() variant: variant = 'common'
}
