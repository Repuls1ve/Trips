import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadBooking } from 'src/app/store/booking/booking.actions';
import { selectBooking } from 'src/app/store/booking/booking.selectors';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  name = this.route.snapshot.params['name']
  booking$ = this.store.select(selectBooking)

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadBooking({name: this.name}))
  }

}
