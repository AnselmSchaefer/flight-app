import { TestBed } from '@angular/core/testing';

import { FlightService } from './flight.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';

describe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule, FormsModule, SharedModule]
    });
    service = TestBed.inject(FlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
