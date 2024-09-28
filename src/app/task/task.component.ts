import { Component, input } from '@angular/core';
import { ITask } from '../Models/itask';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<ITask>();

  onCompleteTask() {
    this.task().completed = !this.task().completed;
  }
}
