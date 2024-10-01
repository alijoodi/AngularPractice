import { Injectable } from '@angular/core';
import { ITask } from '../Models/itask';
import { DUMMY_TASKS } from '../DUMMY_TASKS';
import { DUMMY_USERS } from '../dummy-users';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [];
  /**
   *
   */
  constructor() {
    let taskInLocalStorage = localStorage.getItem('tasks');
    if (taskInLocalStorage) {
      this.tasks = JSON.parse(taskInLocalStorage);
    } else {
      localStorage.setItem('tasks', JSON.stringify(DUMMY_TASKS));
    }
  }

  addTask(task: ITask) {
    this.tasks.push(task);
    this.saveTask();
  }

  getUserTask(userId: string) {
    return this.tasks.filter((x) => x.userId === userId);
  }

  completeTask(taskId: string) {
    var task = this.tasks.find((x) => x.id === taskId);
    if (task) task.completed = false;
    this.saveTask();
    return task?.completed;
  }

  saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
