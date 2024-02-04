import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { StatusColorPipe } from './status-color.pipe';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      FlightCardComponent,
      DateComponent,
      CityPipe,
      StatusFilterPipe,
      StatusColorPipe
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
