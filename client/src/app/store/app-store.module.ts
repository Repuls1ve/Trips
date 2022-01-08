import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Features } from './app.state';
import { journeysReducer } from './journeys/journeys.reducer';
import { journeyReducer } from './journey/journey.reducer';
import { bookingReducer } from './booking/booking.reducer';
import { statsReducer } from './stats/stats.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { JourneysEffects } from './journeys/journeys.effects';
import { JourneyEffects } from './journey/journey.effects';
import { BookingEffects } from './booking/booking.effects';
import { StatsEffects } from './stats/stats.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      [Features.Journeys]: journeysReducer,
      [Features.Journey]: journeyReducer,
      [Features.Booking]: bookingReducer,
      [Features.Stats]: statsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      JourneysEffects,
      JourneyEffects,
      BookingEffects,
      StatsEffects
    ]),
  ],
  exports: [
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ]
})
export class AppStoreModule {}
