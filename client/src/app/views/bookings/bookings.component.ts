import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IBookingPreview } from 'src/app/models/booking.model';
import { AppState } from 'src/app/store/app.state';
import { loadBookings } from 'src/app/store/booking/booking.actions';
import { selectBookings } from 'src/app/store/booking/booking.selectors';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  readonly bookings$ = this.store.select(selectBookings)

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router  
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadBookings({
      limit: 0,
      offset: 0
    }))
  }

  onBookingClick(booking: IBookingPreview): void {
    this.router.navigate([`booking/${booking.name}`])
  }
}
