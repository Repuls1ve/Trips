import { createAction, props } from '@ngrx/store';
import { GetBookingDto } from 'src/app/dtos/get-booking.dto';
import { IError } from 'src/app/interfaces/errors.interface';
import { IPaginationQuery } from 'src/app/interfaces/queries.interface';
import { IBooking, IBookingPreview } from 'src/app/models/booking.model';

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

export const loadBooking = createAction(
  '[Booking Page] Load Booking',
  props<GetBookingDto>()
)

export const loadBookingSuccess = createAction(
  '[Booking Page] Load Booking Success',
  props<IBooking>()
)

export const loadBookingFailure = createAction(
  '[Booking Page] Load Booking Failure',
  props<IError>()
)