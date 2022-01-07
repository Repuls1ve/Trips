import { createAction, props } from '@ngrx/store'
import { IError } from 'src/app/interfaces/errors.interface'
import { IJourneysPackagesQuery, IRatedJourneysQuery } from 'src/app/interfaces/queries.interface'
import { IJourneysPackageStats, IRatedJourneys, IRatedJourneysStats } from 'src/app/models/journey.model'

export const loadJourneysStats = createAction(
  '[Home Page] Load Journeys Stats'
)

export const loadJourneysStatsSuccess = createAction(
  '[Home Page] Load Journeys Stats Success',
  props<IRatedJourneysStats>()
)

export const loadJourneysStatsFailure = createAction(
  '[Home Page] Load Journeys Stats Failure',
  props<IError>()
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
  props<IError>()
)

export const loadJourneysPackages = createAction(
  '[Home Page] Load Journeys Packages',
  props<IJourneysPackagesQuery>()
)

export const loadJourneysPackagesSuccess = createAction(
  '[Home Page] Load Journeys Packages Success',
  props<{data: IJourneysPackageStats[]}>()
)

export const loadJourneysPackagesFailure = createAction(
  '[Home Page] Load Journeys Packages Failure',
  props<IError>()
)