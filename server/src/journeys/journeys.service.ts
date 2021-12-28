import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable, switchMap } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { getAverage } from 'src/common/utils/get-average.util';
import { removeRepeats } from 'src/common/utils/remove-repeats.util';
import { toArray } from 'src/common/utils/to-array.util';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { AddReviewDto } from './dtos/add-review.dto';
import { GetJourneyDto } from './dtos/get-journey.dto';
import { GetJourneysPackagesDto } from './dtos/get-journeys-packages.dto';
import { GetRatedJourneysDto } from './dtos/get-rated-journeys.dto';
import { IJourneyInfo, IJourneyReviews, IJourneyReviewScore } from './interfaces/journey.interface';
import { IJourneysPackagesStats } from './interfaces/journeys-packages.interface';
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

  getJourney(getJourneyDto: GetJourneyDto): Observable<JourneyDocument> {
    return from(this.journey.findById(getJourneyDto.id))
  }

  getJourneysPackagesStats(journeysPackagesDto: GetJourneysPackagesDto): Observable<IJourneysPackagesStats> {
    return from(this.journey.find()).pipe(
      map(journeys => toArray<JourneyDocument>(journeys)),
      map(journeys => {
        const packages = removeRepeats<IJourneyInfo['package']>(
          journeys.map(journey => journey.info.package))
          .slice(0, journeysPackagesDto.limit)
        return packages.map(pack => ({
          package: pack,
          photo: journeys.filter(journey => journey.info.package === pack)[0].info.photo,
          count: journeys.filter(journey => journey.info.package === pack).length
        }))
      })
    )
  }

  getRatedJourneys(ratedJourneysDto: GetRatedJourneysDto): Observable<IRatedJourneys> {
    return from(this.journey.find({'info.continent': ratedJourneysDto.continent})
    .limit(ratedJourneysDto.limit)
    ).pipe(
      map(journeys => toArray<JourneyDocument>(journeys)),
      map(journeys => ({
        continent: ratedJourneysDto.continent,
        journeys: journeys
      }))
    )
  }

  getRatedJourneysStats(): Observable<IRatedJourneysStats> {
    return from(this.journey.find()).pipe(
      map(journeys => toArray<JourneyDocument>(journeys)),
      map(journeys => ({
        continents: removeRepeats<IJourneyInfo['continent']>(journeys.map(journey => journey.info.continent))
      }))
    )
  }
  
  addJourney(addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return from(this.journey.create(addJourneyDto))
  }

  addReview(addReviewDto: AddReviewDto): Observable<IJourneyReviews> {
    return from(this.journey.findById(addReviewDto.id)).pipe(
      map(document => {
        if (!document) throw new NotFoundException()
        return document
      }),
      switchMap(journey => {
        const reviewsUpdated = [
          ...journey.reviews?.reviews || [],
          addReviewDto.review
        ]
        const attributes = removeRepeats<IJourneyReviewScore['attribute']>(reviewsUpdated
          .flatMap(review => review.scores.map(score => score.attribute)))
        
        const scoresUpdated = attributes
        .map(attribute => ({
          attribute: attribute,
          rating: getAverage(reviewsUpdated.flatMap(review => review.scores
            .filter(score => score.attribute == attribute)
            .flatMap(score => score.rating)))
        }))
        const totalRating = getAverage(scoresUpdated.map(score => score.rating))
        journey.reviews = {
          breakdown: {
            scores: scoresUpdated,
            rating: totalRating,
            count: reviewsUpdated.length
          },
          reviews: reviewsUpdated
        }
        return from(journey.save()).pipe(
          map(journey => journey.reviews)
        )
      })
    )
  }
}
