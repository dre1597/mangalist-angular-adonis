import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EMAIL_REGEX } from '../../utils/regex';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  protected forgotPasswordForm!: FormGroup;

  private readonly formBuilder = inject(FormBuilder);

  public ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    });
  }

  protected submitForm(): void {
    console.log(this.forgotPasswordForm.value);
  }
}
