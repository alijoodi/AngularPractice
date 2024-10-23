import { Component, signal } from '@angular/core';
import { DpitaskService } from '../../Services/dpitask.service';
import { Dpitask } from '../../Models/dpitask';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-dpitask-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatBadgeModule],
  templateUrl: './dpitask-list.component.html',
  styleUrl: './dpitask-list.component.css',
})
export class DPItaskListComponent {
  changeStatus(id: string) {
    this.taskService.changeStatus(id);
  }
  constructor(private taskService: DpitaskService) {}

  get taskList(): Dpitask[] {
    return this.taskService.getTask();
  }
}
