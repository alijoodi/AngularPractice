import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../Models/iuser';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  userId = input.required<string>();
  isAddingTask: boolean = false;

  get user() {
    return DUMMY_USERS.find((x) => x.id == this.userId());
  }
  get userTask() {
    return DUMMY_USERS.find((x) => x.id == this.userId())?.tasks;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask(flag: boolean) {
    this.isAddingTask = flag;
  }
}
