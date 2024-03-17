import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { FormsModule } from '@angular/forms';
import { CityValidationDirective } from './validation/city-validation.directive';
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusFilterPipe,
    StatusColorPipe,
    CityValidationDirective,
    RoundTripValidationDirective
  
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusFilterPipe,
    StatusColorPipe,

    CommonModule,
    CityValidationDirective,
  ]
})
export class SharedModule { }
