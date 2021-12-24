import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { JourneysState } from './journeys.reducer';

const journeysFeature = (state: AppState) => state.journeys

export const selectJourneysStatsData = createSelector(
  journeysFeature,
  (state: JourneysState) => state.stats.data
)

export const selectJourneysStatsStatus = createSelector(
  journeysFeature,
  (state: JourneysState) => state.stats.status
)

export const selectJourneysStatsError = createSelector(
  journeysFeature,
  (state: JourneysState) => state.stats.error
)

export const selectJourneysRatedData = createSelector(
  journeysFeature,
  (state: JourneysState) => state.rated.data
)

export const selectJourneysRatedStatus = createSelector(
  journeysFeature,
  (state: JourneysState) => state.rated.status
)

export const selectJourneysRatedError = createSelector(
  journeysFeature,
  (state: JourneysState) => state.rated.error
)

export const selectJourneysData = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journeys.data
)

export const selectJourneysStatus = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journeys.status
)

export const selectJourneysError = createSelector(
  journeysFeature,
  (state: JourneysState) => state.journeys.error
)