import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ILuxuryJourney } from '../interfaces/luxury-journey.interface';

export type LuxuryJourneyDocument = LuxuryJourney & Document

@Schema()
export class LuxuryJourney implements ILuxuryJourney {
  @Prop({
    type: Object,
    required: true
  })
  info: ILuxuryJourney['info']

  @Prop({
    type: Object,
    required: true
  })
  plan: ILuxuryJourney['plan']
  
  @Prop({
    type: Object,
    required: true
  })
  location: ILuxuryJourney['location']

  @Prop({
    type: Object,
    required: true
  })
  tips: ILuxuryJourney['tips']

  @Prop({
    type: Object,
    required: true
  })
  gallery: ILuxuryJourney['gallery']

  @Prop({
    type: Object
  })
  reviews: ILuxuryJourney['reviews']
}

export const LuxuryJourneySchema = SchemaFactory.createForClass(LuxuryJourney)