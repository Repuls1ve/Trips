import { JourneysState } from './journeys/journeys.reducer';

export enum Features {
  Journeys = 'journeys'
}

export interface AppState {
  [Features.Journeys]: JourneysState
}