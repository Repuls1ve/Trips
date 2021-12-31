import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { JourneysService } from 'src/app/services/journeys.service';
import { loadJourneysPackages, loadJourneysPackagesFailure, loadJourneysPackagesSuccess, loadJourneysStats, loadJourneysStatsFailure, loadJourneysStatsSuccess, loadRatedJourneys, loadRatedJourneysFailure, loadRatedJourneysSuccess } from './stats.actions';

@Injectable()
export class StatsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly journeys: JourneysService
  ) {}
  
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

  loadJourneysPackages$ = createEffect(() => this.actions$.pipe(
    ofType(loadJourneysPackages),
    switchMap(payload => this.journeys.getJourneysPackages(payload).pipe(
      map(data => loadJourneysPackagesSuccess({data})),
      catchError(error => of(loadJourneysPackagesFailure(error)))
    ))
  ))
}