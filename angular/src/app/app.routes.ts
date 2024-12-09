import { Routes } from '@angular/router';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { AuthComponent } from './core/auth/auth.component';

export const routes: Routes = [
    { path: 'users', component: UserProfileComponent },
    { path: 'login', component: AuthComponent}
];
