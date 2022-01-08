import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { RatingScaleComponent } from './components/rating-scale/rating-scale.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { environment } from 'src/environments/environment';
import { JourneyComponent } from './views/journey/journey.component';
import { AgmCoreModule } from '@agm/core';
import { ReviewComponent } from './components/review/review.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { TripsComponent } from './views/trips/trips.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingsComponent } from './views/bookings/bookings.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { BookingComponent } from './views/booking/booking.component';
import { AppStoreModule } from './store/app-store.module';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TabsComponent,
    TabComponent,
    TourCardComponent,
    RatingScaleComponent,
    CarouselComponent,
    CarouselItemComponent,
    ObserveVisibilityDirective,
    PackageCardComponent,
    JourneyComponent,
    ReviewComponent,
    PaginationComponent,
    TextFieldComponent,
    TextAreaComponent,
    RatingInputComponent,
    TripsComponent,
    NewslettersComponent,
    ContactComponent,
    FooterComponent,
    BookingsComponent,
    BookingComponent,
    BookingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppStoreModule,
    NgxSkeletonLoaderModule.forRoot({animation: 'progress'}),
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
