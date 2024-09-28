import { Component, input, output } from '@angular/core';
import { IUser } from '../Models/iuser';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  user = input<IUser>();
  cancel = output<boolean>();
  onCancelAddTask() {
    this.cancel.emit(false);
  }
}
