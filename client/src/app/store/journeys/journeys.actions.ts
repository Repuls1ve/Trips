import { createAction, props } from '@ngrx/store';
import { IError } from 'src/app/interfaces/errors.interface';
import { IPaginationQuery } from 'src/app/interfaces/queries.interface';
import { IJourney } from 'src/app/models/journey.model';

export const loadJourneys = createAction(
  '[Journeys Page] Load Journeys',
  props<IPaginationQuery>()
)

export const loadJourneysSuccess = createAction(
  '[Journeys Page] Load Journeys Success',
  props<{data: IJourney[]}>()
)

export const loadJourneysFailure = createAction(
  '[Journeys Page] Load Journeys Failure',
  props<IError>()
)

export const uploadJourneys = createAction(
  '[Journeys Page] Upload Journeys',
  props<IPaginationQuery>()
)

export const uploadJourneysSuccess = createAction(
  '[Journeys Page] Upload Journeys Success',
  props<{data: IJourney[]}>()
)

export const uploadJourneysFailure = createAction(
  '[Journeys Page] Upload Journeys Failure',
  props<IError>()
)