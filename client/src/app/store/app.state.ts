import { JourneyState } from './journey/journey.reducer';
import { JourneysState } from './journeys/journeys.reducer';
import { StatsState } from './stats/stats.reducer';

export enum Features {
  Journeys = 'journeys',
  Journey = 'journey',
  Stats = 'stats'
}

export interface AppState {
  [Features.Journeys]: JourneysState
  [Features.Journey]: JourneyState
  [Features.Stats]: StatsState
}