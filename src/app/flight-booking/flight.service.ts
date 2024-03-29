import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
})
export abstract class FlightService {

  
  abstract find(from: string, to: string): Observable<Flight[]>;
}
