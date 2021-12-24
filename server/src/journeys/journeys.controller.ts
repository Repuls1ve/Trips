import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
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
}
