import { Routes } from '@angular/router';
import { TaskListComponent } from './UserComponent/task-list/task-list.component';
import { ObservableDeepDiveComponent } from './Observable/observable-deep-dive/observable-deep-dive.component';
import { UserInputDeepDiveLoginComponent } from './UserInputDeepDive/user-input-deep-dive-login/user-input-deep-dive-login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'observable',
    component: ObservableDeepDiveComponent,
  },
];
