import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { TestDirectiveComponent } from '../test-directive/test-directive.component';

@Component({
  selector: 'app-messagebox',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageboxComponent {
  readonly dialogRef = inject(MatDialogRef<MessageboxComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  readonly title = signal<string>(this.data.title);
  readonly message = signal<string>(this.data.message);
  action = output<boolean>();

  onClick(act: boolean) {
    this.action.emit(act);
    this.dialogRef.close();
  }
}
