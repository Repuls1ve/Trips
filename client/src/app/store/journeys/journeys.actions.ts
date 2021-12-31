import { createAction, props } from '@ngrx/store';
import { AddReviewDto } from 'src/app/dtos/add-review.dto';
import { IJourney, IJourneyReviews, IJourneysError, IJourneysQuery, IRatedJourneys, IRatedJourneysQuery, IRatedJourneysStats } from 'src/app/models/journey.model';

export const loadJourneysStats = createAction(
  '[Home Page] Load Journeys Stats'
)

export const loadJourneysStatsSuccess = createAction(
  '[Home Page] Load Journeys Stats Success',
  props<IRatedJourneysStats>()
)

export const loadJourneysStatsFailure = createAction(
  '[Home Page] Load Journeys Stats Failure',
  props<IJourneysError>()
)

export const loadRatedJourneys = createAction(
  '[Home Page] Load Rated Journeys',
  props<IRatedJourneysQuery>()
)

export const loadRatedJourneysSuccess = createAction(
  '[Home Page] Load Rated Journeys Success',
  props<IRatedJourneys>()
)

export const loadRatedJourneysFailure = createAction(
  '[Home Page] Load Rated Journeys Failure',
  props<IJourneysError>()
)

export const loadJourneys = createAction(
  '[Journeys Page] Load Journeys',
  props<IJourneysQuery>()
)

export const loadJourneysSuccess = createAction(
  '[Journeys Page] Load Journeys Success',
  props<{data: IJourney[]}>()
)

export const loadJourneysFailure = createAction(
  '[Journeys Page] Load Journeys Failure',
  props<IJourneysError>()
)

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