import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Observable, Observer, Subscription } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html',
  styleUrls: ['./rxjs-basics.component.scss']
})
export class RxjsBasicsComponent implements OnInit, OnDestroy {
  private myFirstObsSubscription$: Subscription;
  private firstTenNumbersSubscription$: Subscription;

  constructor() { }

  ngOnInit() {
    this.myFirstObserver();
    this.firstTenNumbers();
  }

  private firstTenNumbers() {
    const myNumbers = interval(1000);
    const firstTenNumbers = myNumbers.pipe(filter(n => n > 10));

    this.firstTenNumbersSubscription$ = myNumbers
      /* .pipe(
        takeUntil(firstTenNumbers)
      ) */
      .subscribe((n: number) => {
        console.log(`number: ${n}`);
      });
  }

  private myFirstObserver() {
    const myObservable: Observable<number> = Observable.create(function(observer: Observer<number>) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      });
      observer.error('Oooops, something went wron');
    });

    this.myFirstObsSubscription$ = myObservable.subscribe({
      next: (val: number) => console.log(`got value: ${val}`),
      error: err => console.log('error: ', err),
      complete: () => console.log('done!')
    });
  }

  ngOnDestroy() {
    this.firstTenNumbersSubscription$.unsubscribe();
    this.myFirstObsSubscription$.unsubscribe();
  }
}
