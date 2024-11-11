import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages$ = new BehaviorSubject<string[]>([]);
  private messageList = signal<string[]>([]);

  messages = this.messageList.asReadonly();

  addMessage(message: string) {
    this.messageList().push(message);
    //this.messages$.next(this.messageList());
  }

  getMessages() {
    return this.messages();
  }

  constructor() {}
}
