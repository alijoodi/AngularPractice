import { Directive, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageboxComponent } from '../messagebox/messagebox.component';
@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafeLinkDirective {
  readonly dialog = inject(MatDialog);

  constructor() {
    console.log('appSafeLink');
  }

  onClick(event: MouseEvent) {
    this.dialog
      .open(MessageboxComponent, {
        data: {
          title: 'Message',
          message: 'Are you sure you want to leave this app?',
        },
      })
      .afterClosed()
      .subscribe((data) => {
        console.log(data);
      });


    // const wantsToLeave = window.confirm(
    //   'Are you sure you want to leave this app?'
    // );
    // if (wantsToLeave) {
    //   return;
    // }
    // event.preventDefault();
  }
}
