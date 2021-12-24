import { IsArray, IsDefined, IsNotEmptyObject, IsObject } from 'class-validator';
import { IJourney } from '../interfaces/journey.interface';

export class AddJourneyDto {
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  info: IJourney['info']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  plan: IJourney['plan']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  location: IJourney['location']

  @IsDefined()
  @IsArray()
  tips: IJourney['tips']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  gallery: IJourney['gallery']
}