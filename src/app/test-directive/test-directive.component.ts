import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SafeLinkDirective } from '../Directives/appsafelink.directive';
import { MatDialog } from '@angular/material/dialog';
import { MessageboxComponent } from '../messagebox/messagebox.component';

@Component({
  selector: 'app-test-directive',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './test-directive.component.html',
  styleUrl: './test-directive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDirectiveComponent {
  readonly dialog = inject(MatDialog);

  onClick() {
    const dialogResult = this.dialog.open(MessageboxComponent, {
      data: {
        title: 'Message',
        message: 'Are you sure you want to leave this app?',
      },
    });

    dialogResult.componentInstance.action.subscribe((result) => {
      console.log('result : ' + result);
    });
  }
}
