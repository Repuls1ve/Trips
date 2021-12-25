import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { IRatedJourneys, TravelContinent } from 'src/app/models/journey.model';
import { AppState } from 'src/app/store/app.state';
import { loadJourneysStats, loadRatedJourneys } from 'src/app/store/journeys/journeys.actions';
import { selectJourneysStats, selectRatedJourneys } from 'src/app/store/journeys/journeys.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly stats$ = this.store.select(selectJourneysStats)
  readonly journeys$ = this.store.select(selectRatedJourneys)

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>
  ) {}
  
  ngOnInit(): void {
    this.store.dispatch(loadJourneysStats())
  }

  onTabSelect(tab: TabComponent): void {
    this.store.dispatch(loadRatedJourneys({
      continent: tab.title as TravelContinent,
      limit: 5
    }))
  }

  selectJourneys(data: IRatedJourneys[], continent: TravelContinent): IRatedJourneys | undefined {
    return data.find(journeys => journeys.continent === continent)
  }
}
