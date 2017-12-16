import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

import { AutoUnsubscribe } from './../../decorators';
import { CustomValidators } from './../../validators';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from './../../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@AutoUnsubscribe('subscriptions')
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  emailMessage: string;
  passwordMessage: string;
  confirmPasswordMessage: string;

  private subscriptions: Subscription[] = [];
  private emailValidationMessages = {
    required: 'Please enter your email.',
    pattern: 'Please enter valid email'
  };
  private passwordValidationMessages = {
    required: 'Please enter your password.',
    minlength: 'Minimum 3 characters.'
  };

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.watchValueChanges();
  }

  onRegisterSubmit() {
    if (!this.userForm.valid || this.userForm.errors) return;

    const formData = this.userForm.value;

    const user = new User(
      null,
      formData.name,
      formData.email,
      formData.username,
      formData.passwordGroup.password,
      formData.isAdmin
    );

    // Register uesr
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/login']);
      }
    });
  }

  private buildForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      }, { validator: CustomValidators.passwordMatcher }),
      isAdmin: false, // validators are set on isAdmin checkbox change
      adminConfirmationCode: [''],
    });
  }

  private watchValueChanges() {
    const emailControl = this.userForm.get('email');
    const emailSubscription = emailControl.valueChanges
      .debounceTime(1000)
      .subscribe(value => this.emailMessage = this.defineErrorMessage(emailControl, this.emailValidationMessages));

    const passwordControl = this.userForm.get('passwordGroup.password');
    const passwordSubscription = passwordControl.valueChanges
      .debounceTime(1000)
      .subscribe(value => this.passwordMessage = this.defineErrorMessage(passwordControl, this.passwordValidationMessages));

    const confirmPasswordControl = this.userForm.get('passwordGroup.confirmPassword');
    const confirmPasswordSubscription = confirmPasswordControl.valueChanges
      .debounceTime(1000)
      .subscribe(value => this.confirmPasswordMessage = this.defineErrorMessage(confirmPasswordControl, this.passwordValidationMessages));

    const isAdminControl = this.userForm.get('isAdmin');
    const isAdminSubscription = isAdminControl.valueChanges
      .subscribe(value => this.setAdminConfirmationCode(value));

    this.subscriptions.push(passwordSubscription);
    this.subscriptions.push(confirmPasswordSubscription);
    this.subscriptions.push(isAdminSubscription);
  }

  private defineErrorMessage(c: AbstractControl, validationMessages: Object) {
    if ((c.touched || c.dirty) && c.errors) {
      return Object
        .keys(c.errors)
        .map(key => validationMessages[key])
        .join(' ');
    }
  }

  private setAdminConfirmationCode(isAdminChecked: boolean) {
    const adminConfirmationCodeControl = this.userForm.get('adminConfirmationCode');
    adminConfirmationCodeControl.setValue('');

    if (isAdminChecked) {
      adminConfirmationCodeControl.reset();
      adminConfirmationCodeControl.setValidators([Validators.required, CustomValidators.adminConfirmationCodeMarcher]);
    } else {
      adminConfirmationCodeControl.clearValidators();
    }

    adminConfirmationCodeControl.updateValueAndValidity();
  }

}
