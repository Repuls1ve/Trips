import { createAction, props } from '@ngrx/store'
import { AddReviewDto } from 'src/app/dtos/add-review.dto'
import { IJourney, IJourneyReviews, IJourneysError } from 'src/app/models/journey.model'

export const loadJourney = createAction(
  '[Journey Page] Load Journey',
  props<{id: IJourney['_id']}>()
)

export const loadJourneySuccess = createAction(
  '[Journey Page] Load Journey Success',
  props<IJourney>()
)

export const loadJourneyFailure = createAction(
  '[Journey Page] Load Journey Failure',
  props<IJourneysError>()
)

export const addReview = createAction(
  '[Journey Page] Post Review',
  props<AddReviewDto>()
)

export const addReviewSuccess = createAction(
  '[Journey Page] Post Review Success',
  props<IJourneyReviews>()
)

export const addReviewFailure = createAction(
  '[Journey Page] Post Review Failure',
  props<IJourneysError>()
)