import { createReducer, on } from '@ngrx/store'
import { IError } from 'src/app/interfaces/errors.interface'
import { IJourney } from 'src/app/models/journey.model'
import { loadJourneys, loadJourneysFailure, loadJourneysSuccess, uploadJourneys, uploadJourneysFailure, uploadJourneysSuccess } from './journeys.actions'

export type status = 'pending' | 'loading' | 'error' | 'success'

export interface JourneysState {
  journeys: {
    data: IJourney[]
    error: IError | null
    status: status
  }
}

const initialState: JourneysState = {
  journeys: {
    data: [] as IJourney[],
    error: null,
    status: 'pending'
  }
}

export const journeysReducer = createReducer(
  initialState,
  on(loadJourneys, state => ({
    ...state,
    journeys: {
      ...state.journeys,
      status: 'loading'
    }
  })),
  on(loadJourneysSuccess, (state, payload) => ({
    ...state,
    journeys: {
      ...state.journeys,
      data: payload.data,
      error: null,
      status: 'success'
    }
  })),
  on(loadJourneysFailure, (state, error) => ({
    ...state,
    journeys: {
      ...state.journeys,
      error: error,
      status: 'error'
    }
  })),
  on(uploadJourneys, state => ({
    ...state,
    journeys: {
      ...state.journeys,
      status: 'loading'
    }
  })),
  on(uploadJourneysSuccess, (state, payload) => ({
    ...state,
    journeys: {
      ...state.journeys,
      data: [...state.journeys.data, ...payload.data],
      error: null,
      status: 'success'
    }
  })),
  on(uploadJourneysFailure, (state, error) => ({
    ...state,
    journeys: {
      ...state.journeys,
      error: error,
      status: 'error'
    }
  }))
)
