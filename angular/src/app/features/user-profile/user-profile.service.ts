import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./../../core/auth/user.model";
import { map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    createUser(user: Partial<User>): Observable<User> {
        return this.http.post<User>('users', user).pipe(
            map((response) => {
                return response;
            })
        );
    }
}
