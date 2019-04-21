import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OnboardingGuardService implements CanActivate {

  constructor(private authicationService: AuthenticationService,private _router: Router) { }

  canActivate(): boolean {
    const user = this.authicationService.getCurrentUser();
    if(user) {
      this._router.navigate(['/onboarding']);
      return false;
    }
    return true;
  }
  
}
