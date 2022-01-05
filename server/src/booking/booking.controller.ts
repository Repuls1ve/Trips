import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { BookingService } from './booking.service';
import { AddBookingDto } from './dtos/add-booking.dto';
import { BookingDocument } from './schemas/booking.schema';

@Controller('booking')
export class BookingController {
  constructor(private readonly booking: BookingService) {}

  @Get()
  getBookings(@Query() paginationQuery: PaginationQueryDto): Observable<BookingDocument[]> {
    return this.booking.getBookings(paginationQuery)
  }

  @Post('add')
  addBooking(@Body() addBookingDto: AddBookingDto): Observable<BookingDocument> {
    return this.booking.addBooking(addBookingDto)
  }
}
