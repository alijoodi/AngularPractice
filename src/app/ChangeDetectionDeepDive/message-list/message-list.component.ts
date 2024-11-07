import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MessageListComponent {
  constructor(private messageService: MessageService) {}

  messageList = computed(() => {
    return this.messageService.getMessages();
  });
}
