import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { SharedModule } from '../shared/shared.module';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    //CommonModule, ==> comes via Shared Module
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
