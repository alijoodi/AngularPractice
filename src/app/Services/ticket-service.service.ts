import { computed, Injectable, signal } from '@angular/core';
import { Ticket } from '../Models/ticket';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  /**
   *
   */
  constructor(private snackBar: MatSnackBar) {}
  tickets = signal<Ticket[]>([]);

  AddTicket(ticket: Ticket) {
    this.tickets().push(ticket);
    this.snackBar.open('اطلاعات با موفقیت ثبت شد', 'پیام', { duration: 2000 });
  }

  getTickets = computed(() => this.tickets);
}
