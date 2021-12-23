import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JourneysModule } from './journeys/journeys.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JourneysModule,
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
