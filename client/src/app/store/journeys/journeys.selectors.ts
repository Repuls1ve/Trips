import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { JourneysState } from './journeys.reducer';

const journeysFeature = (state: AppState) => state.journeys

export const selectJourneysStats = createSelector(
  journeysFeature,
  (state: JourneysState) => state.stats
)

export const selectRatedJourneys = createSelector(
  journeysFeature,
  (state: JourneysState) => state.rated
)

export const selectJourneys = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journeys
)

export const selectJourney = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journey
)