import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusFilterPipe,
    StatusColorPipe
  
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusFilterPipe,
    StatusColorPipe,

    CommonModule
  ]
})
export class SharedModule { }
