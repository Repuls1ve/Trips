import { Component, Input } from '@angular/core';
import { IJourneyReview } from 'src/app/models/journey.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review!: IJourneyReview
}
