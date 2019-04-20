import { Injectable } from '@angular/core';

import { User } from '../../login/shared/model/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    public username: BehaviorSubject<string> = new BehaviorSubject(null);
    
    constructor() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if(user) { 
            this.username.next(user.username);
        }
    }
    
    public getCurrentUser(): string {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if(user) {
            return user.username;
        }
        return null;
    }

    login(username: string, password: string) { 
        const user = new User();
        user.username = username;
        user.password = password;
        this.username.next(user.username);
        localStorage.setItem('currentUser',JSON.stringify(user));
        return this.username.getValue();
    }

    logout() {
        // remove user from local storage to log user out
        this.username.next(null);
        localStorage.removeItem('currentUser');
    }
}
