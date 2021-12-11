import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RatingScaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
