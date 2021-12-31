import { createReducer, on } from '@ngrx/store'
import { IJourney, IJourneysError } from 'src/app/models/journey.model'
import { loadJourneys, loadJourneysFailure, loadJourneysSuccess } from './journeys.actions'

export type status = 'pending' | 'loading' | 'error' | 'success'

export interface JourneysState {
  journeys: {
    data: IJourney[]
    error: IJourneysError | null
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
  }))
)
