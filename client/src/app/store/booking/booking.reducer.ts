import { createReducer, on } from '@ngrx/store'
import { IError } from 'src/app/interfaces/errors.interface'
import { IBookingPreview } from 'src/app/models/booking.model'
import { status } from '../journeys/journeys.reducer'
import { loadBookings, loadBookingsFailure, loadBookingsSuccess } from './booking.actions'

export interface BookingState {
  bookings: {
    data: IBookingPreview[]
    error: IError | null
    status: status
  }
}

export const initialState: BookingState = {
  bookings: {
    data: [] as IBookingPreview[],
    error: null,
    status: 'pending'
  }
}

export const bookingReducer = createReducer(
  initialState,
  on(loadBookings, state => ({
    ...state,
    bookings: {
      ...state.bookings,
      status: 'loading'
    }
  })),
  on(loadBookingsSuccess, (state, payload) => ({
    ...state,
    bookings: {
      ...state.bookings,
      data: payload.data,
      error: null,
      status: 'success'
    }
  })),
  on(loadBookingsFailure, (state, error) => ({
    ...state,
    bookings: {
      ...state.bookings,
      error: error,
      status: 'error'
    }
  }))
)