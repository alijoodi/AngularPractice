import { Injectable, Signal, signal } from '@angular/core';
import { Permission } from '../Models/enumerations';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  activePermission(): Permission {
    var userType = signal<Permission>('admin');
    return userType();
  }

  constructor() {}
}
