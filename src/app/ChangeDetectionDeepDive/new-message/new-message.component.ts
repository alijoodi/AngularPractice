import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MessageService } from '../../Services/message.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMessageComponent {
  constructor(
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {}
  message = signal<string>('');
  SaveMessage() {
    if (this.message() === '') {
      this.snackBar.open('please enter a message', 'Okay', { duration: 3000 });
      return;
    }
    this.messageService.addMessage(this.message());
    this.message.set('');
    console.log(this.messageService.getMessages());
    this.snackBar.open('your message has been saved', 'Okay', {
      duration: 3000,
    });
  }
}
