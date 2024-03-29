import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightBookingComponent } from './flight-booking.component';

describe('FlightBookingComponent', () => {
  let component: FlightBookingComponent;
  let fixture: ComponentFixture<FlightBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightBookingComponent],
       imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(FlightBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
