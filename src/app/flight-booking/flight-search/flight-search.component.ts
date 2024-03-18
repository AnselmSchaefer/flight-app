import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { FlightClass } from '../flight-class';
import { Observer } from 'rxjs';

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
  nonstop: boolean;


  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  date: string = (new Date()).toISOString();

  flightClasses: FlightClass[] = [
    { id:1, name:'1st Class'},
    { id:2, name:'Business Class'},
    { id:3, name: 'Economy Class'}
  ]

  flightClass = this.flightClasses[2];

  constructor(private flightService: FlightService) {

  }

  ngOnInit(): void {

  }

  // Assuming you have a function that matches the expected signature
  handleFlights(flights: Flight[]): void {
    console.log('Received flights:', flights);
    // You could add more logic here to handle the flights as needed
  }
  

  search(): void {
    const observerOrNext: Partial<Observer<Flight[]>> = {
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    };
  
    this.flightService.find(this.from, this.to).subscribe(observerOrNext);
    //this.flightService.find(this.from, this.to).subscribe(this.handleFlights);
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
