import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { Journey, JourneyDocument } from './schemas/journey.schema';

@Injectable()
export class JourneysService {
  constructor(@InjectModel(Journey.name) private readonly journey: Model<JourneyDocument>) {}

  getJourneys(paginationQuery: PaginationQueryDto): Observable<JourneyDocument[]> {
    const { limit, offset } = paginationQuery

    return from(this.journey.find()
    .skip(offset)
    .limit(limit)
    ).pipe(map(journeys => Array.isArray(journeys) ? journeys : [journeys]))
  }

  addJourney(addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return from(this.journey.create(addJourneyDto))
  }
}
