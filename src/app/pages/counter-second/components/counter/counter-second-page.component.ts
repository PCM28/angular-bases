import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-second-page',
  template: `
    <h1>{{title}}: {{counter}}</h1>
    <br />
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="dicreaseBy(1)">-1</button>
  `
})

export class CounterSecondPageComponent {
  title: string = 'Counter 2 App';
  counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

  dicreaseBy(value: number) {
    this.counter -= value;
  }
}
