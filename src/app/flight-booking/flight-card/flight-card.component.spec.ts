import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardComponent } from './flight-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlightCardComponent', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightCardComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule, FormsModule, SharedModule]
    });
    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
