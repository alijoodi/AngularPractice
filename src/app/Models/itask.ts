export interface ITask {
  id: string;
  name: string;
  completed?: boolean;
  dueDate: string;
  userId?: string;
}
