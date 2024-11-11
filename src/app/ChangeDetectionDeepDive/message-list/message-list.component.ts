import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  input,
  OnInit,
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
export class MessageListComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // this.messageService.messages$.subscribe(messages =>{
    //   this.messageList=messages;
    //   this.cdRef.markForCheck();
    // })
  }

  messageList = computed(() => {
    return this.messageService.getMessages();
  });
}
