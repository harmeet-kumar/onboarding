import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OnboardingGuardService implements CanActivate {

  constructor(private authicationService: AuthenticationService,private _router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const user = this.authicationService.getCurrentUser();
    return true
    if(user) {
      return false;
    }
    return true;
  }
  
}
