import { createReducer, on } from '@ngrx/store'
import { IError } from 'src/app/interfaces/errors.interface'
import { IJourney } from 'src/app/models/journey.model'
import { status } from '../journeys/journeys.reducer'
import { addReview, addReviewFailure, addReviewSuccess, loadJourney, loadJourneyFailure, loadJourneySuccess } from './journey.actions'

export interface JourneyState {
  journey: {
    data: IJourney
    error: IError | null
    status: status
  }
  review: {
    error: IError | null
    status: status
  }
}

const initialState: JourneyState = {
  journey: {
    data: {} as IJourney,
    error: null,
    status: 'pending'
  },
  review: {
    error: null,
    status: 'pending'
  }
}

export const journeyReducer = createReducer(
  initialState,
  on(loadJourney, state => ({
    ...state,
    journey: {
      ...state.journey,
      status: 'loading'
    }
  })),
  on(loadJourneySuccess, (state, payload) => ({
    ...state,
    journey: {
      ...state.journey,
      data: payload,
      error: null,
      status: 'success'
    }
  })),
  on(loadJourneyFailure, (state, error) => ({
    ...state,
    journey: {
      ...state.journey,
      error: error,
      status: 'error'
    }
  })),
  on(addReview, state => ({
    ...state,
    review: {
      ...state.review,
      status: 'loading'
    }
  })),
  on(addReviewSuccess, (state, payload) => ({
    ...state,
    review: {
      ...state.review,
      error: null,
      status: 'loading',
    },
    journey: {
      ...state.journey,
      data: {
        ...state.journey.data,
        reviews: payload
      }
    }
  })),
  on(addReviewFailure, (state, error) => ({
    ...state,
    review: {
      ...state.review,
      error: error,
      status: 'error'
    }
  }))
)