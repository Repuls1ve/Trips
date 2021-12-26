import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { JourneysService } from 'src/app/services/journeys.service';
import { loadJourney, loadJourneyFailure, loadJourneys, loadJourneysFailure, loadJourneysStats, loadJourneysStatsFailure, loadJourneysStatsSuccess, loadJourneysSuccess, loadJourneySuccess, loadRatedJourneys, loadRatedJourneysFailure, loadRatedJourneysSuccess } from './journeys.actions';

@Injectable()
export class JourneysEffects {
  constructor(
    private readonly actions$: Actions, 
    private readonly journeys: JourneysService
  ) {}

  loadJourneys$ = createEffect(() => this.actions$.pipe(
    ofType(loadJourneys),
    switchMap(payload => this.journeys.getJourneys(payload).pipe(
      map(data => loadJourneysSuccess({data})),
      catchError(error => of(loadJourneysFailure(error)))
    ))
  ))

  loadJourneysStats$ = createEffect(() => this.actions$.pipe(
    ofType(loadJourneysStats),
    switchMap(() => this.journeys.getJourneysStats().pipe(
      map(data => loadJourneysStatsSuccess(data)),
      catchError(error => of(loadJourneysStatsFailure(error)))
    ))
  ))

  loadRatedJourneys$ = createEffect(() => this.actions$.pipe(
    ofType(loadRatedJourneys),
    switchMap(payload => this.journeys.getRatedJourneys(payload).pipe(
      map(data => loadRatedJourneysSuccess(data)),
      catchError(error => of(loadRatedJourneysFailure(error)))
    ))
  ))

  loadJourney$ = createEffect(() => this.actions$.pipe(
    ofType(loadJourney),
    switchMap(payload => this.journeys.getJourney(payload.id).pipe(
      map(data => loadJourneySuccess(data)),
      catchError(error => of(loadJourneyFailure(error)))
    ))
  ))
}