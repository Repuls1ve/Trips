import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { GetJourneyDto } from './dtos/get-journey.dto';
import { JourneysPackagesQuery } from './dtos/journeys-packages-query.dto';
import { RatedJourneysQuery } from './dtos/rated-journeys-query.dto';
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
  getJourneysPackagesStats(@Query() journeysPackagesQuery: JourneysPackagesQuery): Observable<IJourneysPackagesStats> {
    return this.journeys.getJourneysPackagesStats(journeysPackagesQuery)
  }

  @Get('rated/stats')
  getRatedJourneysStats(): Observable<IRatedJourneysStats> {
    return this.journeys.getRatedJourneysStats()
  }

  @Get('rated')
  getRatedJourneys(@Query() ratedJourneysQuery: RatedJourneysQuery): Observable<IRatedJourneys> {
    return this.journeys.getRatedJourneys(ratedJourneysQuery)
  }

  @Get('one/:id')
  getJourney(@Param() getJourneyDto: GetJourneyDto) {
    return this.journeys.getJourney(getJourneyDto)
  }
}
