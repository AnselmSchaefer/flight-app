import { Flight } from '../flight-booking/flight';

export class FlightManager {

    private cache: Flight[];

    constructor(cache: Flight[]) {
        this.cache = cache;
    }

    search(from: string, to: string): Flight[] {
        const result = new Array<Flight>();
        for (let f of this.cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

    // verbose lamdba, anonymouns function commented out
    search2(from: string, to: string): Flight[] {
        //const result: Flight[] = this.cache.filter(function (f: Flight) {
        const result: Flight[] = this.cache.filter((f: Flight) => {
            return f.from === from && f.to === to;
        });
        return result;
    }

    // short lambda
    search3(from: string, to: string): Flight[] {
        return this.cache.filter(f => f.from === from && f.to === to);
    }
}