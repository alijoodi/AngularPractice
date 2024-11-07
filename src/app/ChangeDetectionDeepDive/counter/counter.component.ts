import { Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  private zone = inject(NgZone);
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter.set(0);
      }, 4000);
    });
  }
  counter = signal(0);

  Increment() {
    this.counter.update((value) => {
      return value + 1;
    });
  }
  Decrement() {
    this.counter.update((value) => {
      return value - 1;
    });
  }
}
