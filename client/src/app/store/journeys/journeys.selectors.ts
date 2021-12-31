import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { JourneysState } from './journeys.reducer';

const journeysFeature = (state: AppState) => state.journeys

export const selectJourneys = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journeys
)