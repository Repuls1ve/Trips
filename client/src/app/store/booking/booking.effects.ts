import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { loadBooking, loadBookingFailure, loadBookings, loadBookingsFailure, loadBookingsSuccess, loadBookingSuccess } from './booking.actions';

@Injectable()
export class BookingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly booking: BookingService
  ) {}

  loadBookings$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookings),
    switchMap(payload => this.booking.getBookings(payload).pipe(
      map(bookings => loadBookingsSuccess({data: bookings})),
      catchError(error => of(loadBookingsFailure(error)))
    ))
  ))

  loadBooking$ = createEffect(() => this.actions$.pipe(
    ofType(loadBooking),
    switchMap(payload => this.booking.getBooking(payload).pipe(
      map(booking => loadBookingSuccess(booking)),
      catchError(error => of(loadBookingFailure(error)))
    ))
  ))
}