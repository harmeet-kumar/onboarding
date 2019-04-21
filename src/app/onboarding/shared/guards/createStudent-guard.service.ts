import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { OnboardingDetailsComponent } from '../../onboarding-details/onboarding-details.component';
import { Constants } from 'src/app/shared/Constants/constants';

@Injectable()
export class CreateGuardService  implements CanDeactivate<OnboardingDetailsComponent> {
  constructor(private router: Router) {}
  /**
   * @param  {OnboardingDetailsComponent} component
   * @returns boolean
   * Confirms with user if he wants to loose the data incase he left the form half filled.
   */
  canDeactivate(component: OnboardingDetailsComponent): boolean {
    if (component.studentForm.dirty) {
      const url = this.router.url;
      if(url.includes('create') && component.studentForm.invalid) {
        return confirm(Constants.GUARDMESSAGE);
      }
      if(url.includes('edit')) {
        return confirm(Constants.GUARDMESSAGE);
      }
    }
    return true;
  }

}
