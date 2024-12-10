import { inject } from "@angular/core";
import { UserService } from "../auth/services/user.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const userService =   inject(UserService);
    const router = inject(Router);

    if (!userService.isAuthenticated) {
        return router.navigate(["/login"]);
    }

    return true
};
