import { Injectable } from '@angular/core';
import { ITask } from '../Models/itask';
import { DUMMY_TASKS } from '../DUMMY_TASKS';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = DUMMY_TASKS;

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  getUserTask(userId: string) {
    return this.tasks.filter((x) => x.userId === userId);
  }

  completeTask(taskId: string) {
    var task = this.tasks.find((x) => x.id === taskId);
    if (task) task.completed = false;
    return task?.completed;
  }
}
