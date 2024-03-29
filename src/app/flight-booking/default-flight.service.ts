import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Observable } from 'rxjs';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://demo.ANGULARarchitects.io/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    
    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }
}
