import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { removeRepeats } from 'src/common/utils/remove-repeats.util';
import { toArray } from 'src/common/utils/to-array.util';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { RatedJourneysQuery } from './dtos/rated-journeys-query.dto';
import { IJourneyInfo } from './interfaces/journey.interface';
import { IRatedJourneys, IRatedJourneysStats } from './interfaces/rated-journeys.interface';
import { Journey, JourneyDocument } from './schemas/journey.schema';

@Injectable()
export class JourneysService {
  constructor(@InjectModel(Journey.name) private readonly journey: Model<JourneyDocument>) {}

  getJourneys(paginationQuery: PaginationQueryDto): Observable<JourneyDocument[]> {
    const { limit, offset } = paginationQuery

    return from(this.journey.find()
    .skip(offset)
    .limit(limit)
    ).pipe(map(journeys => toArray<JourneyDocument>(journeys)))
  }

  getRatedJourneys(ratedJourneysQuery: RatedJourneysQuery): Observable<IRatedJourneys> {
    return from(this.journey.find({'info.continent': ratedJourneysQuery.continent})
    .limit(ratedJourneysQuery.limit)
    ).pipe(
      map(journeys => toArray<JourneyDocument>(journeys)),
      map(journeys => ({
        continent: ratedJourneysQuery.continent,
        journeys: journeys
      }))
    )
  }

  getRatedJourneysStats(): Observable<IRatedJourneysStats> {
    return from(this.journey.find()).pipe(
      map(journeys => toArray(journeys)),
      map(journeys => ({
        continents: removeRepeats<IJourneyInfo['continent']>(journeys.map(journey => journey.info.continent))
      }))
    )
  }
  
  addJourney(addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return from(this.journey.create(addJourneyDto))
  }
}
