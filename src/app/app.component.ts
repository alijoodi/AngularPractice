import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './UserComponent/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { UserListComponent } from './UserComponent/user-list/user-list.component';
import { TaskListComponent } from './UserComponent/task-list/task-list.component';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private userService: UserService) {
  }

  userId: string = 'u1';
  users = signal(this.userService.getUsers());
  title = 'first-angular-app';
}
