import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JourneysController } from './journeys.controller';
import { JourneysService } from './journeys.service';
import { Journey, JourneySchema } from './schemas/journey.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Journey.name,
    schema: JourneySchema
  }])],
  controllers: [JourneysController],
  providers: [JourneysService]
})
export class JourneysModule {}
