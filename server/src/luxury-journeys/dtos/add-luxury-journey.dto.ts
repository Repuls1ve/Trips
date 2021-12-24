import { IsArray, IsDefined, IsNotEmptyObject, IsObject } from 'class-validator';
import { ILuxuryJourney } from '../interfaces/luxury-journey.interface';

export class AddLuxuryJourneyDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  info: ILuxuryJourney['info']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  plan: ILuxuryJourney['plan']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  location: ILuxuryJourney['location']

  @IsDefined()
  @IsArray()
  tips: ILuxuryJourney['tips']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  gallery: ILuxuryJourney['gallery']
}