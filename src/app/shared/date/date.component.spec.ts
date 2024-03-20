import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateComponent],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
