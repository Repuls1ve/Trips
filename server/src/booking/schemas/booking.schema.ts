import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IBooking } from '../interfaces/booking.interface';

export type BookingDocument = Booking & Document

@Schema()
export class Booking implements IBooking {
  @Prop({
    type: String,
    required: true
  })
  name: IBooking['name']

  @Prop({
    type: Object,
    required: true
  })
  photo: IBooking['photo']

  @Prop({
    type: Object,
    required: true
  })
  descriptions: IBooking['descriptions']

  @Prop({
    type: Array,
    required: true
  })
  advantages: IBooking['advantages']

  @Prop({
    type: Array,
    required: true
  })
  inputs: IBooking['inputs']
}

export const BookingSchema = SchemaFactory.createForClass(Booking)