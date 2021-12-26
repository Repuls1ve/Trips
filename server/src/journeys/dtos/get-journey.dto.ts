import { IsDefined, Matches } from 'class-validator';
import { JourneyDocument } from '../schemas/journey.schema';

export class GetJourneyDto {
  @IsDefined()
  @Matches(/^[0-9a-fA-F]{24}$/)
  id: JourneyDocument['_id']
}