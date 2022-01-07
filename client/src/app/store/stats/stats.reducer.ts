import { createReducer, on } from '@ngrx/store'
import { IError } from 'src/app/interfaces/errors.interface'
import { IJourneysPackageStats, IRatedJourneys, IRatedJourneysStats } from 'src/app/models/journey.model'
import { status } from '../journeys/journeys.reducer'
import { loadJourneysPackages, loadJourneysPackagesFailure, loadJourneysPackagesSuccess, loadJourneysStats, loadJourneysStatsFailure, loadJourneysStatsSuccess, loadRatedJourneys, loadRatedJourneysFailure, loadRatedJourneysSuccess } from './stats.actions'

export interface StatsState {
  stats: {
    data: IRatedJourneysStats
    error: IError | null
    status: status
  }
  rated: {
    data: IRatedJourneys[]
    error: IError | null
    status: status
  }
  packages: {
    data: IJourneysPackageStats[],
    error: IError | null,
    status: status
  } 
}

const initialState: StatsState = {
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
  packages: {
    data: [] as IJourneysPackageStats[],
    error: null,
    status: 'pending'
  }
}

export const statsReducer = createReducer(
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
  on(loadJourneysPackages, state => ({
    ...state,
    packages: {
      ...state.packages,
      status: 'pending'
    }
  })),
  on(loadJourneysPackagesSuccess, (state, payload) => ({
    ...state,
    packages: {
      ...state.packages,
      data: payload.data,
      error: null,
      status: 'success'
    }
  })),
  on(loadJourneysPackagesFailure, (state, error) => ({
    ...state,
    packages: {
      ...state.packages,
      error: error,
      status: 'error'
    }
  }))
)