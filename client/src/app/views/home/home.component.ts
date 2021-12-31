import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { IJourney, IRatedJourneys, TravelContinent } from 'src/app/models/journey.model';
import { AppState } from 'src/app/store/app.state';
import { loadJourneysPackages, loadJourneysStats, loadRatedJourneys } from 'src/app/store/stats/stats.actions';
import { selectPackages, selectRated, selectStats } from 'src/app/store/stats/stats.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly stats$ = this.store.select(selectStats)
  readonly journeys$ = this.store.select(selectRated)
  readonly packages$ = this.store.select(selectPackages)

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}
  
  ngOnInit(): void {
    this.store.dispatch(loadJourneysStats())
    this.store.dispatch(loadJourneysPackages({limit: 5}))
  }

  onTabSelect(tab: TabComponent): void {
    this.store.dispatch(loadRatedJourneys({
      continent: tab.title as TravelContinent,
      limit: 5
    }))
  }

  onJourneyClick(journey: IJourney): void {
    this.router.navigate([`trips/journey/${journey._id}`])
  }

  selectJourneys(data: IRatedJourneys[], continent: TravelContinent): IRatedJourneys | undefined {
    return data.find(journeys => journeys.continent === continent)
  }
}
