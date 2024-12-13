import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, UntypedFormGroup } from '@angular/forms';
import { UserProfileService } from './user-profile.service';
import { CommonModule } from '@angular/common';


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

  constructor(service: UserProfileService) {
    this.service = service
  }

  onSubmit() {
    console.log(this.userform)
    this.service.createUser({...this.userform.value}).subscribe();
  }
}
