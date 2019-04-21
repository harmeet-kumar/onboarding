import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OnboardingGuardService implements CanActivate {

  constructor(private authicationService: AuthenticationService) { }

  canActivate(): boolean {
    const user = this.authicationService.getCurrentUser();
    if(user) {
      return false;
    }
    return true;
  }
  
}
