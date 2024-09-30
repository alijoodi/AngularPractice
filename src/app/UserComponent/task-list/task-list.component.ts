import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { IUser } from '../../Models/iuser';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../Services/task.service';
import { UserService } from '../../Services/user.service';
import { ITask } from '../../Models/itask';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  /**
   *
   */
  constructor(
    private taskService: TaskService,
    private userService: UserService
  ) {}
  userId = input.required<string>();
  isAddingTask: boolean = false;

  get user(): IUser | undefined {
    return this.userService.getUserById(this.userId());
  }
  get userTask(): ITask[] {
    return this.taskService.getUserTask(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask(flag: boolean) {
    this.isAddingTask = flag;
  }
}
