import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MessageService } from '../../Services/message.service';
import { ErrorService } from '../../Services/error.service';
@Component({
  selector: 'app-user-input-deep-dive-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-input-deep-dive-login.component.html',
  styleUrl: './user-input-deep-dive-login.component.css',
})
export class UserInputDeepDiveLoginComponent {
  errorService = inject(ErrorService);
  readonly frm = new FormGroup({
    emailFormControl: new FormControl('a@gmail.com', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  matcher = new ErrorStateMatcher();
  constructor() {
    console.log('user input');
  }
  login() {
    this.errorService.showMessage(
      `You are logging with username: ${this.frm.value.emailFormControl} and password: ${this.frm.value.passwordFormControl}`,
      ''
    );
    console.log('clicking on login button');
    console.log(this.frm);
    console.log(this.frm.value.emailFormControl);
  }
}
