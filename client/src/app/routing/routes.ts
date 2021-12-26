import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { JourneyComponent } from '../views/journey/journey.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'journey/:id',
    component: JourneyComponent
  }
]