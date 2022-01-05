import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { toArray } from 'src/common/utils/to-array.util';
import { AddBookingDto } from './dtos/add-booking.dto';
import { Booking, BookingDocument } from './schemas/booking.schema';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking.name) private readonly booking: Model<BookingDocument>) {}

  getBookings(paginationQuery: PaginationQueryDto): Observable<BookingDocument[]> {
    const { limit, offset } = paginationQuery

    return from(this.booking.find()
    .skip(offset)
    .limit(limit)
    ).pipe(map(bookings => toArray<BookingDocument>(bookings)))
  }

  addBooking(addBookingDto: AddBookingDto): Observable<BookingDocument> {
    return from(this.booking.create(addBookingDto))
  }
}
