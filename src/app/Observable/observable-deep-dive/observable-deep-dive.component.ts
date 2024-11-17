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
import { ErrorService } from '../../Services/error.service';

@Component({
  selector: 'app-observable-deep-dive',
  standalone: true,
  imports: [],
  templateUrl: './observable-deep-dive.component.html',
  styleUrl: './observable-deep-dive.component.css',
})
export class ObservableDeepDiveComponent {
  clickCount = signal(0);
  count$ = toObservable(this.clickCount);

  countSubscriber = this.count$.subscribe({
    next: (val) =>
      console.log(
        `click on button for ${this.clickCount()} times in subscription`
      ),
    complete: () => {
      console.log('complete');
    },
  });
  constructor(private errorService: ErrorService) {
    effect(() => {
      console.log(`click on button2 for ${this.clickCount()} times`);
    });
  }

  clickButton() {
    this.clickCount.update((val) => val + 1);
    if (this.clickCount() === 3) {
      this.countSubscriber.unsubscribe();
    }
    this.errorService.showMessage(`please show my error message observable${this.clickCount()}`, 'error');

  }
}
