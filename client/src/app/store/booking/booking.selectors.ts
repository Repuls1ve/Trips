import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BookingState } from './booking.reducer';

export const bookingFeature = (state: AppState) => state.booking

export const selectBookings = createSelector(
  bookingFeature,
  (state: BookingState) => state.bookings
)

export const selectBooking = createSelector(
  bookingFeature,
  (state: BookingState) => state.booking
)