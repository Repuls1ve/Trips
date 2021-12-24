import { createReducer, on } from '@ngrx/store'
import { IJourney, IJourneysError, IRatedJourneys, IRatedJourneysStats } from 'src/app/models/journey.model'
import { loadJourneys, loadJourneysFailure, loadJourneysStats, loadJourneysStatsFailure, loadJourneysStatsSuccess, loadJourneysSuccess, loadRatedJourneys, loadRatedJourneysFailure, loadRatedJourneysSuccess } from './journeys.actions'

export type status = 'pending' | 'loading' | 'error' | 'success'

export interface JourneysState {
  stats: {
    data: IRatedJourneysStats
    error: IJourneysError | null
    status: status
  },
  rated: {
    data: IRatedJourneys[]
    error: IJourneysError | null
    status: status
  }
  journeys: {
    data: IJourney[]
    error: IJourneysError | null
    status: status
  }
}

const initialState: JourneysState = {
  stats: {
    data: {} as IRatedJourneysStats,
    error: null,
    status: 'pending'
  },
  rated: {
    data: [] as IRatedJourneys[],
    error: null,
    status: 'pending'
  },
  journeys: {
    data: [] as IJourney[],
    error: null,
    status: 'pending'
  },
}

export const journeysReducer = createReducer(
  initialState,
  on(loadJourneysStats, state => ({
    ...state,
    stats: {
      ...state.stats,
      status: 'loading'
    }
  })),
  on(loadJourneysStatsSuccess, (state, payload) => ({
    ...state,
    stats: {
      ...state.stats,
      data: payload,
      error: null,
      status: 'success'
    }
  })),
  on(loadJourneysStatsFailure, (state, error) => ({
    ...state,
    stats: {
      ...state.stats,
      error: error,
      status: 'error'
    }
  })),
  on(loadRatedJourneys, state => ({
    ...state,
    rated: {
      ...state.rated,
      status: 'loading'
    }
  })),
  on(loadRatedJourneysSuccess, (state, payload) => {
    return {
      ...state,
      rated: {
        ...state.rated,
        data: [...state.rated.data.filter(journeys => journeys.continent !== payload.continent), payload],
        error: null,
        status: 'success'
      }
    }
  }),
  on(loadRatedJourneysFailure, (state, error) => ({
    ...state,
    rated: {
      ...state.rated,
      error: error,
      status: 'error'
    }
  })),
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
