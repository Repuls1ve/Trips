import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { IJourneyInfo } from './interfaces/journey.interface';
import { IRatedJourneys } from './interfaces/rated-journeys.interface';
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

  getRatedJourneys(): Observable<IRatedJourneys> {
    return from(this.journey.find()).pipe(
      map(journeys => Array.isArray(journeys) ? journeys : [journeys]),
      map(journeys => {
        let continents: IJourneyInfo['continent'][] = []

        journeys.forEach(journey => continents.includes(journey.info.continent)
        ? null : continents.push(journey.info.continent))

        const ratedJourneys = continents.map(continent => ({
          continent: continent,
          journeys: journeys.filter(journey => journey.info.continent === continent)
        }))
        return ratedJourneys
      })
    )
  }

  addJourney(addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return from(this.journey.create(addJourneyDto))
  }
}
