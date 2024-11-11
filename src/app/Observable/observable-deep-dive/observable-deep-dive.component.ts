import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-observable-deep-dive',
  standalone: true,
  imports: [],
  templateUrl: './observable-deep-dive.component.html',
  styleUrl: './observable-deep-dive.component.css',
})
export class ObservableDeepDiveComponent implements OnInit {
  clickCount = signal(0);
  
  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.clickCount()} times`);
    });
  }

  clickButton() {
    this.clickCount.update((prevValue) => prevValue + 1);
  }


  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscaription = interval(1000)
      .pipe(
        map((val) => val + 3),
        map((val) => val * 2)
      )
      .subscribe({
        next(value) {
          console.log(value);
        },
        complete() {
          console.log('completeObservableDeepDive');
        },
      });

    this.destroyRef.onDestroy(() => {
      subscaription.unsubscribe();
    });
  }
}
