import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadBookings } from 'src/app/store/booking/booking.actions';
import { selectBookings } from 'src/app/store/booking/booking.selectors';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  readonly bookings$ = this.store.select(selectBookings)

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBookings({
      limit: 0,
      offset: 0
    }))
  }
}
