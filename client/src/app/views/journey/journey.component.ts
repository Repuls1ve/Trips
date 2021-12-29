import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { JourneyTabs } from 'src/app/constants/journey-tabs.constant';
import { MapStyles } from 'src/app/constants/map-styles.constant';
import { AppState } from 'src/app/store/app.state';
import { loadJourney } from 'src/app/store/journeys/journeys.actions';
import { selectJourney } from 'src/app/store/journeys/journeys.selectors';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  id = this.route.snapshot.params['id']
  reviewsPage = 1
  reviewsPageSize = 3

  journey$ = this.store.select(selectJourney)
  tabs = JourneyTabs
  styles = MapStyles

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    public readonly media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadJourney({id: this.id}))
  }

  changePage(page: number): void {
    this.reviewsPage = page
  }
}