import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, UntypedFormGroup } from '@angular/forms';
import { UserProfileService } from './user-profile.service';
import { CommonModule } from '@angular/common';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';


interface UserForm {
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-user-profile',
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userform: UntypedFormGroup = new FormGroup<any>({});
  service: UserProfileService;
  errorMessage: string = '';

  get firstName() { return this.userform.get('firstName'); }
  get lastName() { return this.userform.get('lastName'); }
  get email() { return this.userform.get('email'); }
  get password() { return this.userform.get('password'); }

  ngOnInit() {
    this.userform = new FormGroup<UserForm>({
      firstName: new FormControl(
        '',
        [Validators.required]
      ),
      lastName: new FormControl(
        '',
        [Validators.required, Validators.nullValidator]
      ),
      email: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required]
      )
    });
  }

  constructor(service: UserProfileService, private router: Router) {
    this.service = service
  }

  onSubmit() {
    this.service.createUser({...this.userform.value}).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Ocorreu um erro ao cadastrar o usuário - ' + error.error.message;
      }
    });
  }
}
