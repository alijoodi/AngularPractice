import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorService } from '../Services/error.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-error',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './custom-error.component.html',
  styleUrl: './custom-error.component.css',
})
export class CustomErrorComponent {
  /**
   *
   */
  constructor(private errorService: ErrorService) {}
  title = computed(()=>this.errorService.title());
  message = computed(()=>this.errorService.message());
  
}
