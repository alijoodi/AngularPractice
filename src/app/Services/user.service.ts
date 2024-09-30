import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type ITask } from '../Models/itask';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = DUMMY_USERS;

  getUsers() {
    return this.users;
  }
  getUserById(userId: string): IUser | undefined {
    return this.users.find((x) => x.id === userId);
  }
}
