import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: 'input[appCity]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CityValidationDirective, multi: true }]
})
export class CityValidationDirective implements Validator {

  public validate(c: AbstractControl): ValidationErrors | null {
    const value = c.value;
    if (value === 'Graz' || value === 'Hamburg' || value === 'Frankfurt' || value === 'Wien' || value === 'Mallorca') {
      return null;
    }
    return { appCity: {
      reason: 'Requested Airport currently not available. Please choose another one.',
      allowedCities: ['Graz', 'Hamburg', 'Frankfurt', 'Wien', 'Mallorca'],
      tryAgain: 2031
    } };
  }
  constructor() { }

}
