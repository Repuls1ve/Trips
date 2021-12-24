import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LuxuryJourneysController } from './luxury-journeys.controller';
import { LuxuryJourneysService } from './luxury-journeys.service';
import { LuxuryJourney, LuxuryJourneySchema } from './schemas/luxury-journey.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: LuxuryJourney.name,
      schema: LuxuryJourneySchema
    }])
  ],
  controllers: [LuxuryJourneysController],
  providers: [LuxuryJourneysService]
})
export class LuxuryJourneysModule {}
