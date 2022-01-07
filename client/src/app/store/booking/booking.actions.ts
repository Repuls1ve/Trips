import { createAction, props } from '@ngrx/store';
import { IError } from 'src/app/interfaces/errors.interface';
import { IPaginationQuery } from 'src/app/interfaces/queries.interface';
import { IBookingPreview } from 'src/app/models/booking.model';

export const loadBookings = createAction(
  '[Bookings Page] Load Bookings',
  props<IPaginationQuery>()
)

export const loadBookingsSuccess = createAction(
  '[Bookings Page] Load Bookings Success',
  props<{data: IBookingPreview[]}>()
)

export const loadBookingsFailure = createAction(
  '[Bookings Page] Load Bookings Failure',
  props<IError>()
)