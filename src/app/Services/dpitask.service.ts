import { Injectable, signal } from '@angular/core';
import { Dpitask } from '../Models/dpitask';

@Injectable({
  providedIn: 'root',
})
export class DpitaskService {
  taskList = signal<Dpitask[]>([]);

  constructor() {}

  addTask(task: Dpitask) {
    this.taskList().push(task);
  }

  getTask(): Dpitask[] {
    return this.taskList();
  }

  getTaskByTitle(taskTitle: string): Dpitask[] {
    return this.taskList().filter((task) => task.title.includes(taskTitle));
  }

  getTaskById(id: string): Dpitask | undefined {
    return this.taskList().find((task) => task.id === id);
  }

  changeStatus(id: string) {
    let task = this.taskList().find((task) => task.id === id);
    if (task?.status === 'OPEN') task.status = 'IN_PROGRESS';
    else if (task?.status === 'IN_PROGRESS') task.status = 'DONE';
  }
}
