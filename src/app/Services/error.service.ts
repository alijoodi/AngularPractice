import { computed, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomErrorComponent } from '../custom-error/custom-error.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  dialog = inject(MatDialog);
  title = signal('');
  message = signal('');

  showMessage(message: string, title: string) {
    this.title.set(title);
    this.message.set(message);
    this.dialog.open(CustomErrorComponent);
  }
}
