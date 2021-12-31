import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { JourneysService } from 'src/app/services/journeys.service';
import { addReview, addReviewFailure, addReviewSuccess, loadJourney, loadJourneyFailure, loadJourneySuccess } from './journey.actions';

@Injectable()
export class JourneyEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly journeys: JourneysService
  ) {}

  loadJourney$ = createEffect(() => this.actions$.pipe(
    ofType(loadJourney),
    switchMap(payload => this.journeys.getJourney(payload.id).pipe(
      map(data => loadJourneySuccess(data)),
      catchError(error => of(loadJourneyFailure(error)))
    ))
  ))

  addReview$ = createEffect(() => this.actions$.pipe(
    ofType(addReview),
    switchMap(payload => this.journeys.addReview(payload).pipe(
      map(data => addReviewSuccess(data)),
      catchError(error => of(addReviewFailure(error)))
    ))
  ))
}