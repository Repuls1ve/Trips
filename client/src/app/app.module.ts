import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JourneysEffects } from './store/journeys/journeys.effects';
import { journeysReducer } from './store/journeys/journeys.reducer';
import { Features } from './store/app.state';
import { JourneyComponent } from './views/journey/journey.component';
import { AgmCoreModule } from '@agm/core';
import { ReviewComponent } from './components/review/review.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { RatingInputComponent } from './components/rating-input/rating-input.component';
import { JourneyEffects } from './store/journey/journey.effects';
import { StatsEffects } from './store/stats/stats.effects';
import { journeyReducer } from './store/journey/journey.reducer';
import { statsReducer } from './store/stats/stats.reducer';
import { TripsComponent } from './views/trips/trips.component';


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
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule.forRoot({animation: 'progress'}),
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    StoreModule.forRoot({
      [Features.Journeys]: journeysReducer,
      [Features.Journey]: journeyReducer,
      [Features.Stats]: statsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([JourneysEffects, JourneyEffects, StatsEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
