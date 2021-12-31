import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { StatsState } from './stats.reducer';

const statsFeature = (state: AppState) => state.stats

export const selectStats = createSelector(
  statsFeature,
  (state: StatsState) => state.stats
)

export const selectRated = createSelector(
  statsFeature,
  (state: StatsState) => state.rated
)

export const selectPackages = createSelector(
  statsFeature,
  (state: StatsState) => state.packages
)