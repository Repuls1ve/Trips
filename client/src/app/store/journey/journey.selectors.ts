import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { JourneyState } from './journey.reducer';

const journeyFeature = (state: AppState) => state.journey

export const selectJourney = createSelector(
  journeyFeature,
  (state: JourneyState) => state.journey
)

export const selectReview = createSelector(
  journeyFeature,
  (state: JourneyState) => state.review
)