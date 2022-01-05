import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { AddBookingDto } from './dtos/add-booking.dto';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking.name) private readonly booking: Model<BookingDocument>) {}

  addBooking(addBookingDto: AddBookingDto): Observable<BookingDocument> {
    return from(this.booking.create(addBookingDto))
  }
}
