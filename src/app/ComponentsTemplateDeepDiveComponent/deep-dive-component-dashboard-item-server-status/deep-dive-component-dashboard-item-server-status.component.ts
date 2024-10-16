import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'app-deep-dive-component-dashboard-item-server-status',
  standalone: true,
  imports: [MatDivider],
  templateUrl:
    './deep-dive-component-dashboard-item-server-status.component.html',
  styleUrl: './deep-dive-component-dashboard-item-server-status.component.css',
})
export class DeepDiveComponentDashboardItemServerStatusComponent
  implements OnInit, OnDestroy
{
  private interval?: ReturnType<typeof setInterval>;
  status: 'online' | 'offline' = 'online';

  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd > 0.5) this.status = 'online';
      else this.status = 'offline';
    }, 5000);
    // this.destroyRef.onDestroy(() => {
    //   clearInterval(this.interval);
    // });
  }
}
