import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AddLuxuryJourneyDto } from './dtos/add-luxury-journey.dto';
import { JourneysPackagesQuery } from './dtos/journeys-packages-query.dto';
import { ILuxuryPackages } from './interfaces/luxury-packages.interface';
import { LuxuryJourneysService } from './luxury-journeys.service';
import { LuxuryJourneyDocument } from './schemas/luxury-journey.schema';

@Controller('luxury')
export class LuxuryJourneysController {
  constructor(private readonly luxury: LuxuryJourneysService) {}

  @Get('packages')
  getPackages(@Query() journeysPackagesQuery: JourneysPackagesQuery): Observable<ILuxuryPackages> {
    return this.luxury.getJourneysPackages(journeysPackagesQuery)
  }

  @Post('Add')
  addJourney(@Body() addLuxuryJourneyDto: AddLuxuryJourneyDto): Observable<LuxuryJourneyDocument> {
    return this.luxury.addJourney(addLuxuryJourneyDto)
  }
}
