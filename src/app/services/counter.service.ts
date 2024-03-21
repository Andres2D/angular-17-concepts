import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CounterService {

  officeCounter: Subject<number> = new Subject<number>;
  currentCounter: number = 0;

  constructor() {
    this.officeCounter.subscribe(value => {
      this.currentCounter = value;
    })
  }

  addCounter(): void {
    this.officeCounter.next(this.currentCounter + 1);
  }
}
