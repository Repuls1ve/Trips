import { IsDefined, IsNotEmptyObject, IsObject, Matches } from 'class-validator';
import { IJourneyReview } from '../interfaces/journey.interface';
import { JourneyDocument } from '../schemas/journey.schema';

export class AddReviewDto {
  @IsDefined()
  @Matches(/^[0-9a-fA-F]{24}$/)
  id: JourneyDocument['_id']

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  review: IJourneyReview
}