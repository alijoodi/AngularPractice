import { Component, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../Models/iuser';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  userId = input.required<string>();

  get user() {
    return DUMMY_USERS.find((x) => x.id == this.userId());
  }
}
