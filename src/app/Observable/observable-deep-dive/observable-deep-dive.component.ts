import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-observable-deep-dive',
  standalone: true,
  imports: [],
  templateUrl: './observable-deep-dive.component.html',
  styleUrl: './observable-deep-dive.component.css',
})
export class ObservableDeepDiveComponent {
  clickCount = signal(0);
  clickCount2 = signal(1);
  count$ = toObservable(this.clickCount);

  constructor() {
    this.count$.subscribe((val) =>
      console.log(`click on button for ${this.clickCount()} times in subscription`)
    );

    effect(() => {
      console.log(`click on button2 for ${this.clickCount2()} times`);
    });
  }

  clickButton() {
    this.clickCount.update((val) => val + 1);
    this.clickCount2.update((val) => val + 1);
  }
}
