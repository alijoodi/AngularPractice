import { Component, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserComponent } from '../user/user.component';
import { IUser } from '../Models/iuser';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  // @Input() users?: IUser[];
  users = input<IUser[]>();
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('Selected user with id' + id);
  }
}
