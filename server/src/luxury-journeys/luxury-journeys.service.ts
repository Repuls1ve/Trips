import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { removeRepeats } from 'src/common/utils/remove-repeats.util';
import { toArray } from 'src/common/utils/to-array.util';
import { AddLuxuryJourneyDto } from './dtos/add-luxury-journey.dto';
import { JourneysPackagesQuery } from './dtos/journeys-packages-query.dto';
import { ILuxuryPackages } from './interfaces/luxury-packages.interface';
import { LuxuryJourney, LuxuryJourneyDocument } from './schemas/luxury-journey.schema';

@Injectable()
export class LuxuryJourneysService {
  constructor(@InjectModel(LuxuryJourney.name) private readonly luxury: Model<LuxuryJourneyDocument>) {}

  getJourneysPackages(journeysPackagesQuery: JourneysPackagesQuery): Observable<ILuxuryPackages> {
    return from(this.luxury.find()).pipe(
      map(journeys => toArray<LuxuryJourneyDocument>(journeys)),
      map(journeys => {
        const packages = removeRepeats(journeys.map(journey => journey.info.package))
        const journeysPackages = packages
        .slice(0, journeysPackagesQuery.limit)
        .map(name => {
          const packageJourneys = journeys
          .filter(journey => journey.info.package === name)
          return {
          name: name,
          photo: packageJourneys[0].info.photo,
          total: packageJourneys.length,
          journeys: packageJourneys
        }})
        return journeysPackages
      })
    )
  }

  addJourney(addLuxuryJourneyDto: AddLuxuryJourneyDto): Observable<LuxuryJourneyDocument> {
    return from(this.luxury.create(addLuxuryJourneyDto))
  }
}
