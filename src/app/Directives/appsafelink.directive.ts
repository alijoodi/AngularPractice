import { Directive, ElementRef, Inject, inject, input } from '@angular/core';
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
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  readonly dialog = inject(MatDialog);
  queryParam = input();

  constructor() {
    console.log('appSafeLink');
  }

  onClick(event: MouseEvent) {
    const address = this.hostElementRef.nativeElement.href;
    this.hostElementRef.nativeElement.href =
      address + '?from=' + this.queryParam();
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
