import { Inject, InjectionToken, Provider } from '@angular/core';

export type Permission = 'admin' | 'user' | 'guest';
export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {
  value: 'open' | 'In-Progress' | 'done';
  taskStatus: 'OPEN' | 'IN_PROGRESS' | 'DONE';
  text: 'open' | 'In-Progress' | 'completed';
};
export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
  'TASK_STATUS_OPTIONS'
);
export const TaskStatusOptions: TaskStatusOptions[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'open',
  },
  {
    value: 'In-Progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'completed',
  },
];

export const TaskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};
