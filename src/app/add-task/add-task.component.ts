import { Component, input, output, signal } from '@angular/core';
import { IUser } from '../Models/iuser';
import { FormsModule } from '@angular/forms';
import { ITask } from '../Models/itask';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  user = input<IUser>();
  cancel = output<boolean>();

  enteredTitle = signal<string>('');
  entereddueDate = signal<string>('');

  onCancelAddTask() {
    this.cancel.emit(false);
  }

  onSubmit() {
    this.user()?.tasks.push({
      id: new Date().getTime().toString(),
      name: this.enteredTitle(),
      dueDate: this.enteredTitle(),
      completed: false,
    });
    this.cancel.emit(false);
  }
}
