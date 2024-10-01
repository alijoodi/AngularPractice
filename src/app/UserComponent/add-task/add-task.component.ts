import { Component, input, output, signal } from '@angular/core';
import { IUser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../Models/itask';
import { UserService } from '../../Services/user.service';
import { TaskService } from '../../Services/task.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  /**
   *
   */
  constructor(
    private taskService: TaskService
  ) {}
  user = input<IUser>();
  cancel = output<boolean>();

  enteredTitle = signal<string>('');
  entereddueDate = signal<string>('');

  onCancelAddTask() {
    this.cancel.emit(false);
  }

  onSubmit() {
    let t: ITask = {
      id: new Date().getTime().toString(),
      name: this.enteredTitle(),
      dueDate: this.entereddueDate().toString(),
      completed: false,
      userId: this.user()?.id,
    };

    this.taskService.addTask(t);
    this.cancel.emit(false);
  }
}
