import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../flight.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DateComponent } from 'src/app/shared/date/date.component';
import { SharedModule } from 'src/app/shared/shared.module';


describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule, FormsModule, SharedModule],
      providers: [ FlightService],
    });
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
