import { Routes } from '@angular/router';
import { BookingComponent } from '../views/booking/booking.component';
import { BookingsComponent } from '../views/bookings/bookings.component';
import { ContactComponent } from '../views/contact/contact.component';
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
  },
  {
    path: 'booking',
    component: BookingsComponent
  },
  {
    path: 'booking/:name',
    component: BookingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]