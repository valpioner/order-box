import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = c.get('password');
    const passwordConfirmControl = c.get('confirmPassword');

    if (passwordControl.pristine || passwordConfirmControl.pristine) {
      return null;
    }

    if (passwordControl.value === passwordConfirmControl.value) {
      return null;
    }

    return { 'passwordMatch': true };
  }

  static adminConfirmationCodeMarcher(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.pristine || c.value === 'admin') {
      return null;
    }

    return { 'adminCodeMatch': true };
  }


}
