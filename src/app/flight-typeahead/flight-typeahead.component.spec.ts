import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTypeaheadComponent } from './flight-typeahead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlightTypeaheadComponent', () => {
  let component: FlightTypeaheadComponent;
  let fixture: ComponentFixture<FlightTypeaheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightTypeaheadComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(FlightTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
