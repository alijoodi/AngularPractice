import { TaskStatus } from './enumerations';

export interface Dpitask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
