import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';
import { NewMessageComponent } from '../new-message/new-message.component';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MessageListComponent, NewMessageComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
}
