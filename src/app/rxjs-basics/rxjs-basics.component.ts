import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html',
  styleUrls: ['./rxjs-basics.component.scss']
})
export class RxjsBasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.firstTenNumbers();
  }

  private firstTenNumbers() {
    const myNumbers = interval(1000);
    const firstTenNumbers = myNumbers.pipe(filter(n => n > 10));

    myNumbers
      .pipe(
        takeUntil(firstTenNumbers)
      )
      .subscribe((n: number) => {
        console.log(`number: ${n}`);
      });
  }
}
