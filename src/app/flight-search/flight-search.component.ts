import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

type NumberBooleanDict = { [key: number]: boolean };

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  basket: NumberBooleanDict = {
    3: true,
    5: true
  }

  delayFilter = false;

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  date: string = (new Date()).toISOString();

  constructor(private flightService: FlightService) {

  }

  ngOnInit(): void {

  }

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
