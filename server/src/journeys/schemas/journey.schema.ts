import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IJourney } from 'src/journeys/interfaces/journey.interface';

export type JourneyDocument = Journey & Document 

@Schema()
export class Journey implements IJourney {
  @Prop({
    type: Object,
    required: true
  })
  info: IJourney['info']

  @Prop({
    type: Object,
    required: true
  })
  plan: IJourney['plan']
  
  @Prop({
    type: Object,
    required: true
  })
  location: IJourney['location']

  @Prop({
    type: Object,
    required: true
  })
  tips: IJourney['tips']

  @Prop({
    type: Object,
    required: true
  })
  gallery: IJourney['gallery']

  @Prop({
    type: Object
  })
  reviews: IJourney['reviews']
}

export const JourneySchema = SchemaFactory.createForClass(Journey)