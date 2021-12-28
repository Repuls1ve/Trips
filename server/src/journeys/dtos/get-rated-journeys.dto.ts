import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { IJourneyInfo } from '../interfaces/journey.interface';

export class GetRatedJourneysDto {
  @IsString()
  @IsNotEmpty()
  continent: IJourneyInfo['continent']

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number
}