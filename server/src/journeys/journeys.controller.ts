import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { AddReviewDto } from './dtos/add-review.dto';
import { GetJourneyDto } from './dtos/get-journey.dto';
import { GetJourneysPackagesDto } from './dtos/get-journeys-packages.dto';
import { GetRatedJourneysDto } from './dtos/get-rated-journeys.dto';
import { IJourneyReviews } from './interfaces/journey.interface';
import { IJourneysPackagesStats } from './interfaces/journeys-packages.interface';
import { IRatedJourneys, IRatedJourneysStats } from './interfaces/rated-journeys.interface';
import { JourneysService } from './journeys.service';
import { JourneyDocument } from './schemas/journey.schema';

@Controller('journeys')
export class JourneysController {
  constructor(private readonly journeys: JourneysService) {}

  @Get()
  getJourneys(@Query() paginationQuery: PaginationQueryDto): Observable<JourneyDocument[]> {
    return this.journeys.getJourneys(paginationQuery)
  }

  @Post('add')
  addJourney(@Body() addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return this.journeys.addJourney(addJourneyDto)
  }

  @Get('packages/stats')
  getJourneysPackagesStats(@Query() journeysPackagesDto: GetJourneysPackagesDto): Observable<IJourneysPackagesStats> {
    return this.journeys.getJourneysPackagesStats(journeysPackagesDto)
  }

  @Get('rated/stats')
  getRatedJourneysStats(): Observable<IRatedJourneysStats> {
    return this.journeys.getRatedJourneysStats()
  }

  @Get('rated')
  getRatedJourneys(@Query() ratedJourneysDto: GetRatedJourneysDto): Observable<IRatedJourneys> {
    return this.journeys.getRatedJourneys(ratedJourneysDto)
  }

  @Get('one/:id')
  getJourney(@Param() getJourneyDto: GetJourneyDto): Observable<JourneyDocument> {
    return this.journeys.getJourney(getJourneyDto)
  }

  @Post('/reviews/add')
  addReview(@Body() addReviewDto: AddReviewDto): Observable<IJourneyReviews> {
    return this.journeys.addReview(addReviewDto)
  }
}
