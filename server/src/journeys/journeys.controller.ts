import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PaginationQueryDto } from 'src/common/dtos/pagination-query.dto';
import { AddJourneyDto } from './dtos/add-journey.dto';
import { IJourney } from './interfaces/journey.interface';
import { JourneysService } from './journeys.service';

@Controller('journeys')
export class JourneysController {
  constructor(private readonly journeys: JourneysService) {}

  @Get()
  getJourneys(@Query() paginationQuery: PaginationQueryDto): Observable<IJourney[]> {
    return this.journeys.getJourneys(paginationQuery)
  }

  @Post('add')
  addJourney(@Body() addJourneyDto: AddJourneyDto): Observable<IJourney> {
    return this.journeys.addJourney(addJourneyDto)
  }
}
