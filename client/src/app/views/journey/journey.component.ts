import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { JourneyTabs } from 'src/app/constants/journey-tabs.constant';
import { AppState } from 'src/app/store/app.state';
import { loadJourney } from 'src/app/store/journeys/journeys.actions';
import { selectJourney } from 'src/app/store/journeys/journeys.selectors';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
  journey$ = this.store.select(selectJourney)
  tabs = JourneyTabs

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    public readonly media: MediaObserver
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params
    this.store.dispatch(loadJourney({id}))
  }
}