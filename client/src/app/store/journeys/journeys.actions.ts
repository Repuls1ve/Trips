import { createAction, props } from '@ngrx/store';
import { IJourney, IJourneysError, IJourneysQuery, IRatedJourneys, IRatedJourneysQuery, IRatedJourneysStats } from 'src/app/models/journey.model';

export const loadJourneysStats = createAction(
  '[Journeys] Load Journeys Stats'
)

export const loadJourneysStatsSuccess = createAction(
  '[Journeys] Load Journeys Stats Success',
  props<IRatedJourneysStats>()
)

export const loadJourneysStatsFailure = createAction(
  '[Journeys] Load Journeys Stats Failure',
  props<IJourneysError>()
)

export const loadRatedJourneys = createAction(
  '[Journeys] Load Rated Journeys',
  props<IRatedJourneysQuery>()
)

export const loadRatedJourneysSuccess = createAction(
  '[Journeys] Load Rated Journeys Success',
  props<IRatedJourneys>()
)

export const loadRatedJourneysFailure = createAction(
  '[Journeys] Load Rated Journeys Failure',
  props<IJourneysError>()
)

export const loadJourneys = createAction(
  '[Journeys] Load Journeys',
  props<IJourneysQuery>()
)

export const loadJourneysSuccess = createAction(
  '[Journeys] Load Journeys Success',
  props<{data: IJourney[]}>()
)

export const loadJourneysFailure = createAction(
  '[Journeys] Load Journeys Failure',
  props<IJourneysError>()
)