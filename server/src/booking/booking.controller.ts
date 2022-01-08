import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { BookingService } from './booking.service';
import { AddBookingDto } from './dtos/add-booking.dto';
import { GetBookingDto } from './dtos/get-booking.dto';
import { IBookingPreview } from './interfaces/booking.interface';
import { BookingDocument } from './schemas/booking.schema';

@Controller('booking')
export class BookingController {
  constructor(private readonly booking: BookingService) {}

  @Get()
  getBookings(@Query() paginationQuery: PaginationQueryDto): Observable<IBookingPreview[]> {
    return this.booking.getBookings(paginationQuery)
  }

  @Get('one/:name')
  getBooking(@Param() getBookingDto: GetBookingDto): Observable<BookingDocument> {
    return this.booking.getBooking(getBookingDto)
  }

  @Post('add')
  addBooking(@Body() addBookingDto: AddBookingDto): Observable<BookingDocument> {
    return this.booking.addBooking(addBookingDto)
  }
}
