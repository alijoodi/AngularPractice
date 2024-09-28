import { Component, input } from '@angular/core';
import { ITask } from '../itask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<ITask>();



  onCompleteTask() {
    this.task().completed = !this.task().completed;
  }

  
}
