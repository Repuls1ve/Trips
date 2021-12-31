import { createAction, props } from '@ngrx/store'
import { IJourneysError, IJourneysPackagesQuery, IJourneysPackagesStats, IRatedJourneys, IRatedJourneysQuery, IRatedJourneysStats } from 'src/app/models/journey.model'

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

export const loadJourneysPackages = createAction(
  '[Home Page] Load Journeys Packages',
  props<IJourneysPackagesQuery>()
)

export const loadJourneysPackagesSuccess = createAction(
  '[Home Page] Load Journeys Packages Success',
  props<{data: IJourneysPackagesStats}>()
)

export const loadJourneysPackagesFailure = createAction(
  '[Home Page] Load Journeys Packages Failure',
  props<IJourneysError>()
)