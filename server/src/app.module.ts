import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JourneysModule } from './journeys/journeys.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JourneysModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BookingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
