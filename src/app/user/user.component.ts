import {
  Component,
  computed,
  signal,
  Input,
  input,
  EventEmitter,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../Models/iuser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() selectedUserId = new EventEmitter();
  user = input<IUser>();
  imagePath = computed(() => 'users/' + this.user()?.avatar);

  onUserClick() {
    this.selectedUserId.emit(this.user()?.id);
  }

  getRandomIndexUser() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
