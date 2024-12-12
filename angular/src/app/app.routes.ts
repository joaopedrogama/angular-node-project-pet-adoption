import { Routes } from '@angular/router';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'users', component: UserProfileComponent },
    { path: 'login', component: AuthComponent },
    { path: '', component: HomeComponent, canActivate: [authGuard] },

    // Em futuras rotas caso queira protejer a rota para acessar somente se estiver autenticado use:
    // Exemplo: { path: 'users', component: UserProfileComponent, canActivate: [authGuard] }
];
