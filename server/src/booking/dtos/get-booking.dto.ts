import { IsNotEmpty, IsString } from 'class-validator';
import { IBookingPreview } from '../interfaces/booking.interface';

export class GetBookingDto {
  @IsString()
  @IsNotEmpty()
  name: IBookingPreview['name']
}