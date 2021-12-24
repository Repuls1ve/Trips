import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { RatedJourneysQuery } from './dtos/rated-journeys-query.dto';
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

  @Get('rated')
  getRatedJourneys(@Query() ratedJourneysQuery: RatedJourneysQuery): Observable<IRatedJourneys> {
    return this.journeys.getRatedJourneys(ratedJourneysQuery)
  }

  @Get('rated/stats')
  getRatedJourneysStats(): Observable<IRatedJourneysStats> {
    return this.journeys.getRatedJourneysStats()
  }

  @Post('add')
  addJourney(@Body() addJourneyDto: AddJourneyDto): Observable<JourneyDocument> {
    return this.journeys.addJourney(addJourneyDto)
  }
}
