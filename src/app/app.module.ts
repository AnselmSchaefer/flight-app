import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HighlightDirective } from './highlight.directive';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      FlightBookingModule,
      ReactiveFormsModule,
      RouterModule.forRoot(APP_ROUTES)
   ],
   declarations: [
      // Shell
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent,
      BasketComponent,
      HighlightDirective,
      FlightTypeaheadComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
