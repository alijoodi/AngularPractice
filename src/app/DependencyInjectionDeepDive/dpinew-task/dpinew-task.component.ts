import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Dpitask } from '../../Models/dpitask';
import { DpitaskService } from '../../Services/dpitask.service';
import { Guid } from '../../Utilities/guid.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dpinew-task',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './dpinew-task.component.html',
  styleUrl: './dpinew-task.component.css',
})
export class DPInewTaskComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  task = signal<Dpitask>({
    id: Guid.MakeNew().ToString(),
    title: '',
    description: '',
    status: 'OPEN',
  });

  taskService = inject(DpitaskService);

  onSave() {
    this.taskService.addTask(this.task());
    this.task = signal<Dpitask>({
      id: Guid.MakeNew().ToString(),
      title: '',
      description: '',
      status: 'OPEN',
    });
  }
}
