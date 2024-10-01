import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type ITask } from '../Models/itask';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [];

  /**
   *
   */
  constructor() {
    let userInocalStorage = localStorage.getItem('users');
    if (userInocalStorage) {
      this.users = JSON.parse(userInocalStorage);
    } else {
      localStorage.setItem('users', JSON.stringify(DUMMY_USERS));
    }
  }

  getUsers() {
    return this.users;
  }

  getUserById(userId: string): IUser | undefined {
    return this.users.find((x) => x.id === userId);
  }

  addUser(user: IUser) {
    this.users.push(user);
    this.saveUsers();
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
