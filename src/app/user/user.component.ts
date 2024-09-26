import { Component, computed, signal, Input, input } from '@angular/core';
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
  user = input<IUser>();
  imagePath = computed(() => 'users/' + this.user()?.avatar);

  onUserClick() {
    console.log('call User ' + this.user()?.id + ' button click event');
  }

  getRandomIndexUser() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
