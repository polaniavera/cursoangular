import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter Component: {{ counter }}</h3>
            <button (click)="increaseBy(1)" >+1</button>
            <button (click)="increaseBy(-1)" >-1</button>
            <button (click)="resetCounter()" >Reset</button>`
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
