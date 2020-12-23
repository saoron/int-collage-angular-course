import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  profileForm = new FormGroup({
    userId: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  public checkForErrors = false;
  public validationErrors: string[] = [];
  constructor() {}

  get userId() {
    return this.profileForm.get('userId');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get age() {
    return this.profileForm.get('age');
  }

  ngOnInit() {}

  getFormValidationErrors(formGroup: FormGroup) {
    this.validationErrors = [];
    Object.keys(formGroup.controls).forEach((key) => {
      const controlErrors: ValidationErrors = formGroup.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          if (keyError === 'required') {
            this.validationErrors.push('Field ' + key + ' is Required');
          }
          if (keyError === 'email') {
            this.validationErrors.push('Email field ' + key + ' is malformed');
          }
          if (keyError === 'minlength') {
            this.validationErrors.push(
              'Age field ' + key + ' is shorter then expected'
            );
          }
        });
      }
    });
  }

  submit() {
    this.checkForErrors = true;
    this.getFormValidationErrors(this.profileForm);
  }
}

// https://angular.io/guide/form-validation
