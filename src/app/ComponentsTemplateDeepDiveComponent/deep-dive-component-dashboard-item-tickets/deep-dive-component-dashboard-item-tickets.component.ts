import {
  Component,
  ElementRef,
  Inject,
  Signal,
  signal,
  viewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../Services/ticket-service.service';
import { MatButtonModule } from '@angular/material/button';
import { Guid } from '../../Utilities/guid.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deep-dive-component-dashboard-item-tickets',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './deep-dive-component-dashboard-item-tickets.component.html',
  styleUrl: './deep-dive-component-dashboard-item-tickets.component.css',
})
export class DeepDiveComponentDashboardItemTicketsComponent {
  /**
   *
   */
  constructor(
    private ticketService: TicketService,
    private snackBar: MatSnackBar
  ) {}
  title = signal<string>('');
  description = signal<string>('');
  addTicketFlag = signal<boolean>(false);
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  private titleField =
    viewChild.required<ElementRef<HTMLInputElement>>('titleInput');
  private descriptionElement =
    viewChild.required<ElementRef<HTMLInputElement>>('descriptionElement');

  SaveTicket(titleElement: HTMLInputElement, description: string): void {
    // console.dir(titleElement.value);
    this.ticketService.AddTicket({
      id: Guid.MakeNew().ToString(),
      title: this.title(),
      description: this.description(),
    });

    this.addTicketFlag.set(!this.addTicketFlag());
    // this.resetForm();
    console.log(titleElement.value);
    this.form().nativeElement.reset();
  }

  addTicketVisible(): void {
    this.addTicketFlag.set(!this.addTicketFlag());
  }

  resetForm() {
    this.title.set('');
    this.description.set('');
  }
}
