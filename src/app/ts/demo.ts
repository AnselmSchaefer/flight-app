import { Flight } from '../flight-booking/flight';
import { FlightManager } from './flight-manager';
import { ScheduledFlight } from './scheduled-flight';
import { CharterFlight } from './charter-flight';

import { Passenger, Person, Pilot } from './person';

import { PrivateAddress } from './private-address';

let flights: Array<Flight> = [
  {
    id: 17,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T17:00:00.0001:00'
  },
  {
    id: 18,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T18:00:00.0001:00'
  },
  {
    id: 19,
    from: 'Graz',
    to: 'Mallorca',
    date: '2022-02-27T19:00:00.0001:00'
  },
  {
    id: 20,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T20:00:00.0001:00'
  }
];

let fm = new FlightManager(flights);
let result1 = fm.search('Graz', 'Hamburg');

for (let f of result1) {
  console.debug(f);
}

function showFlight(f: Flight) {
  console.debug('---- Flight ----');
  console.debug('id: ' + f.id);
  console.debug('from: ' + f.from);
  console.debug('to: ' + f.to);
  console.debug('date: ' + f.date);
}

const anotherFlight: Flight = {
    id: 99,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T20:00:00.0001:00'
};

showFlight(anotherFlight);

let oneMoreFlight: Flight = new ScheduledFlight();
oneMoreFlight = new CharterFlight();


const person1: Person = new Passenger();

person1.firstName = 'Max';
person1.lastName = 'Mustermann';

const person2: Person = new Pilot();

person2.firstName = 'Jens';
person2.lastName = 'Müller';

const isPerson = person1 instanceof Person;
const isPassenger = person1 instanceof Passenger;
const isPilot = person1 instanceof Pilot;

console.debug('isPerson', isPerson);
console.debug('isPassenger', isPassenger);
console.debug('isPilot', isPilot);

const person1AsPassenger = person1 as Passenger;
person1AsPassenger.passengerStatus = 'VIP';
let status = person1AsPassenger.passengerStatus;
console.log(status)

let privateAddress: PrivateAddress = new PrivateAddress();
privateAddress.firstName = 'Max';
privateAddress.lastName = 'Mustermann';
privateAddress.street = 'Hauptstraße 1';
privateAddress.zipCode = '8010';
privateAddress.city = 'Graz';

console.debug(privateAddress.fullAddress());
console.debug(privateAddress.toCSV());

const nextFlight = new ScheduledFlight();
nextFlight.date = '2018-12-24';
console.debug('unix-date', nextFlight.unixDate);
nextFlight.unixDate = 1000;
console.debug('date', nextFlight.date);

function div(a: number, b: number): number {
    if (b === 0) {
        throw new Error('division by 0 is not allowed')
    }
    return a / b;
}

try {
    let result1 = div(10, 3);
    console.debug('result1', result1);

    let result2 = div(10, 0);
    console.debug('result2', result2);
} catch (error) {
    console.error('Fehler', error);
} finally {
    console.debug('finally');
}

async function timeout2(time: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (time < 0) {
            reject(`Don't be that negative!`);
            return;
        }

        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

async function caller() {
    let result;

    try {
        result = await timeout2(1000);
        console.log('Phase 1', result);

        result = await timeout2(1000);
        console.log('Phase 2', result);

        result = await timeout2(1000);
        console.log('Phase 3', result);
    }
    catch (error) {
        console.error('error', error);
    }
}

caller();