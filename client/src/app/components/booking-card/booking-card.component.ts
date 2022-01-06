import { Component, Input } from '@angular/core';
import { IBookingPreview } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent {
  @Input() booking!: IBookingPreview
}
