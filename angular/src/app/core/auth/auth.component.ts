import { Component, DestroyRef, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Errors } from '../models/errors.models';

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup<AuthForm>;
  destroyRef = inject(DestroyRef);
  errors: Errors = { errors: {} };
  isSubmitting = false;

  constructor(private readonly userService: UserService, private readonly router: Router ) {
    this.authForm = new FormGroup<AuthForm>({
      email: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  submitForm() {
    let observable = this.userService.login(
      this.authForm.value as { email: string; password: string },
    )

    observable.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => void this.router.navigate(["/users"]),
      error: (err) => {
        this.errors = err;
        this.isSubmitting = false;
      },
    });
  }

}
