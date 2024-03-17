import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: 'form[appRoundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: RoundTripValidationDirective, multi: true
    }
  ]
})
export class RoundTripValidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const group = control as FormGroup;
    const from = group.controls?.['from']?.value;
    const to = group.controls?.['to']?.value;
    console.log(from + " " + to);

    // Erst validieren, wenn Werte fuer beide Felder vorliegen:
    if (!from || !to) {
      return null;
    }

    if (from !== to) {
      return null;
    }

    group.setErrors({ appRoundTrip: true });
    return { appRoundTrip: true };
  }

}
