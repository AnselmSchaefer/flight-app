import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../flight-booking/flight';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(flights: Flight[], delayedFilter: boolean | undefined): Flight[] {
    if(typeof delayedFilter === 'undefined') {
      return flights;
    }

    return flights.filter(f => f.delayed === delayedFilter );
  }
}
