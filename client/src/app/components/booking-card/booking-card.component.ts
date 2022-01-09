import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBookingPreview } from 'src/app/models/booking.model';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent {
  @Input() booking!: IBookingPreview
  @Output() onClick = new EventEmitter()

  onRequestClick() {
    this.onClick.emit()
  }
}
