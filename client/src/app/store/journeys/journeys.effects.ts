import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { JourneysService } from 'src/app/services/journeys.service';
import { loadJourneys, loadJourneysFailure, loadJourneysSuccess } from './journeys.actions';

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
}