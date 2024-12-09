import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, UntypedFormGroup } from '@angular/forms';
import { UserProfileService } from './user-profile.service';


interface UserForm {
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-user-profile',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userform: UntypedFormGroup = new FormGroup<UserForm>({
    firstName: new FormControl(
      '',
      [Validators.required]
    ),
    lastName: new FormControl(
      '',
      [Validators.required]
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
  service: UserProfileService;

  get firstName() { return this.userform.get('firstName'); }
  get lastName() { return this.userform.get('lastName'); }
  get email() { return this.userform.get('email'); }
  get password() { return this.userform.get('password'); }

  constructor(service: UserProfileService) {
    this.service = service
  }

  onSubmit() {
    this.service.createUser({...this.userform.value}).subscribe();
  }
}
