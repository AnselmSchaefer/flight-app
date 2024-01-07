import { Flight } from '../flight';

export class ScheduledFlight implements Flight {

    id: number = 0;
    from: string = '';
    to: string = '';
    date: string = '';

    distance: number = 0;

    calcPrice(): number {
        return this.distance / 3;
    }

    get unixDate(): number {
        return new Date(this.date).getTime();
    }

    set unixDate(time: number) {
        const date = new Date(time);
        this.date = date.toISOString();
    }
}