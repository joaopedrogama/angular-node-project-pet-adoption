import { Routes } from '@angular/router';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { AuthComponent } from './core/auth/auth.component';

export const routes: Routes = [
    { path: 'users', component: UserProfileComponent },
    { path: 'login', component: AuthComponent }

    // Em futuras rotas caso queira protejer a rota para acessar somente se estiver autenticado use:
    // Exemplo: { path: 'users', component: UserProfileComponent, canActivate: [authGuard] }
];
