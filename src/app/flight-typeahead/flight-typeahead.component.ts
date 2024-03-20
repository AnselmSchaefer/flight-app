import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, switchMap } from 'rxjs';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.scss']
})
export class FlightTypeaheadComponent implements OnInit{

  control = new FormControl();
  input$ = this.control.valueChanges;

  flights$: Observable<Flight[]>;

  ngOnInit(): void {
  }

  constructor(private flightService: FlightService) {
    this.flights$ = this.input$.pipe(
      debounceTime(300),
      switchMap(input => this.load(input))
    );
  }

  load(from: string): Observable<Flight[]> {
    return this.flightService.find(from, '');
  }
}
