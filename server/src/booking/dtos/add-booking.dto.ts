import { IsArray, IsDefined, IsObject, IsString } from 'class-validator';
import { IBooking } from '../interfaces/booking.interface';

export class AddBookingDto implements IBooking {
  @IsDefined()
  @IsString()
  name: IBooking['name']

  @IsDefined()
  @IsObject()
  photo: IBooking['photo']

  @IsDefined()
  @IsObject()
  descriptions: IBooking['descriptions']

  @IsDefined()
  @IsArray()
  advantages: IBooking['advantages']

  @IsDefined()
  @IsArray()
  inputs: IBooking['inputs']
}