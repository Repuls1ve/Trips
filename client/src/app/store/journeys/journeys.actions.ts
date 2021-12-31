import { createAction, props } from '@ngrx/store';
import { IJourney, IJourneysError, IJourneysQuery } from 'src/app/models/journey.model';

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