import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IJourney } from 'src/app/models/journey.model';
import { AppState } from 'src/app/store/app.state';
import { loadJourneys, uploadJourneys } from 'src/app/store/journeys/journeys.actions';
import { selectJourneys } from 'src/app/store/journeys/journeys.selectors';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  journeys$ = this.store.select(selectJourneys)
  offset = 0

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadJourneys()
  }

  private loadJourneys(): void {
    if (this.media.isActive(['lg', 'xl'])) {
      this.store.dispatch(loadJourneys({
        offset: this.offset,
        limit: 12
      }))
      this.offset += 12
    }
    else if (this.media.isActive('md')) {
      this.store.dispatch(loadJourneys({
        offset: this.offset,
        limit: 9
      }))
      this.offset += 9
    }
    else {
      this.store.dispatch(loadJourneys({
        offset: this.offset,
        limit: 6
      }))
      this.offset += 6
    }
  }

  uploadJourneys(): void {
    if (this.media.isActive(['lg', 'xl'])) {
      this.store.dispatch(uploadJourneys({
        offset: this.offset,
        limit: 12
      }))
      this.offset += 12
    }
    else if (this.media.isActive('md')) {
      this.store.dispatch(uploadJourneys({
        offset: this.offset,
        limit: 9
      }))
      this.offset += 9
    }
    else {
      this.store.dispatch(uploadJourneys({
        offset: this.offset,
        limit: 6
      }))
      this.offset += 6
    }
  }
  
  toJourney(journey: IJourney): void {
    this.router.navigate([`trips/journey/${journey._id}`])
  }
}
