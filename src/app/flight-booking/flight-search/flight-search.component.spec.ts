import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DateComponent } from 'src/app/shared/date/date.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { DummyFlightService } from '../dummy-flight.service';


fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,SharedModule],
      //providers: [ FlightService],
      declarations: [FlightSearchComponent, FlightCardComponent],
      //imports: [HttpClientModule, SharedModule]
      providers: [{
        provide: FlightService, useClass: DummyFlightService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have no loaded flights initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should search for flights when from and to are given', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();

    expect(component.flights.length).toBe(3);
  });

  it('should *not* search for flights *without* from and to', () => {
    component.from = '';
    component.to = '';
    component.search(); 

    expect(component.flights.length).toBe(0);
  });

});
