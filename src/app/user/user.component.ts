import {
  Component,
  computed,
  signal,
  Input,
  input,
  EventEmitter,
  Output,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from '../Models/iuser';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Output() selectedUserId = new EventEmitter();
  selectedUserId = output<string>();
  user = input.required<IUser>();
  imagePath = computed(() => 'users/' + this.user()?.avatar);
  selected = input.required<boolean>();

  onUserClick() {
    this.selectedUserId.emit(this.user().id);
  }

  getRandomIndexUser() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
