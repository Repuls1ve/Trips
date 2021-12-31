import { IJourney, IJourneyReview } from '../models/journey.model';

export interface AddReviewDto {
  id: IJourney['_id']
  review: IJourneyReview
}