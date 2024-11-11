import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-observable-deep-dive',
  standalone: true,
  imports: [],
  templateUrl: './observable-deep-dive.component.html',
  styleUrl: './observable-deep-dive.component.css',
})
export class ObservableDeepDiveComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscaription = interval(1000).subscribe({
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
