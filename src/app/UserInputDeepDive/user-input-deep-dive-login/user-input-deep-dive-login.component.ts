import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MessageService } from '../../Services/message.service';
import { ErrorService } from '../../Services/error.service';
import { NgFor } from '@angular/common';


function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  } else {
    return { mustContainQuestionMark: true };
  }
}

@Component({
  selector: 'app-user-input-deep-dive-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgFor,
    MatButtonModule,
  ],
  templateUrl: './user-input-deep-dive-login.component.html',
  styleUrl: './user-input-deep-dive-login.component.css',
})
export class UserInputDeepDiveLoginComponent implements OnInit {
  errorService = inject(ErrorService);
  frm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      mustContainQuestionMark,
    ]),
  });

  constructor() {}

  matcher = new ErrorStateMatcher();

  ngOnInit(): void {
    console.log('user input');
    this.frm.controls.emailFormControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  login(): void {
    if (this.frm.invalid) {
      console.log('The form is invalid');
      return;
    }

    console.log(this.frm.value);
    this.errorService.showMessage(
      `You are logging with username: ${this.frm.value.emailFormControl} and password: ${this.frm.value.passwordFormControl}`,
      ''
    );
    console.log('clicking on login button');
  }
}
