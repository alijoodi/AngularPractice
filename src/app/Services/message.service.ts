import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageList = signal<string[]>([]);

  messages = this.messageList.asReadonly();

  addMessage(message: string) {
    this.messageList().push(message);
  }

  getMessages() {
    return this.messages();
  }

  constructor() {}
}
