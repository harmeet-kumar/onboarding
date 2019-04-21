import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private authicationService: AuthenticationService,private _router: Router) { }

  canActivate(): boolean {
    const user = this.authicationService.getCurrentUser();
    if(user) {
      return true;
    }
    this._router.navigate(['/notfound']);
    return false;
  }
  
}
