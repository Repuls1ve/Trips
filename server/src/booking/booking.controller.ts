import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BookingService } from './booking.service';
import { AddBookingDto } from './dtos/add-booking.dto';
import { BookingDocument } from './schemas/booking.schema';

@Controller('booking')
export class BookingController {
  constructor(private readonly booking: BookingService) {}

  @Post('add')
  addBooking(@Body() addBookingDto: AddBookingDto): Observable<BookingDocument> {
    return this.booking.addBooking(addBookingDto)
  }
}
