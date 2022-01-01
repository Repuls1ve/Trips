import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { JourneyComponent } from '../views/journey/journey.component';
import { TripsComponent } from '../views/trips/trips.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'trips/journey/:id',
    component: JourneyComponent
  },
  {
    path: 'trips',
    component: TripsComponent
  }
]