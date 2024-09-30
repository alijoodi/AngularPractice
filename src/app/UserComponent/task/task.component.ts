import { Component, input } from '@angular/core';
import { ITask } from '../../Models/itask';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../Services/task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<ITask>();
/**
 *
 */
constructor(private taskService:TaskService) {
  
}
  onCompleteTask() {
    this.taskService.completeTask(this.task().id);
    this.task().completed = !this.task().completed;
  }
}
