import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetBookingDto } from '../dtos/get-booking.dto';
import { IPaginationQuery } from '../interfaces/queries.interface';
import { IBooking, IBookingPreview } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly baseUrl = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  getBookings(bookingsQuery: IPaginationQuery): Observable<IBookingPreview[]> {
    const { limit, offset } = bookingsQuery
    const params = {
      ...offset && { offset },
      ...limit && { limit }
    }
    return this.http.get<IBookingPreview[]>(this.baseUrl + '/booking', { params })
  }

  getBooking(getBookingDto: GetBookingDto): Observable<IBooking> {
    return this.http.get<IBooking>(this.baseUrl + `/booking/one/${getBookingDto.name}`)
  }
}
