import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styles: `
  button {
    font-size: 20px;
    margin-right: 5px;
  }
  `
})

export class CounterPageComponent {
  title: string = 'Counter App';
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
