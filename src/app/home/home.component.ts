import { Component } from '@angular/core';
import { simpleObservable } from '../shared/observable-factories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home: Flight App';

  //constructor

  constructor() {
    const simple$ = simpleObservable();
    simple$.subscribe({
      next: value => console.log('next', value),
      error: err => console.log('error', err),
      complete: () => console.log('complete')
    });
  }
}
