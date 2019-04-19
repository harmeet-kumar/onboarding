import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { OnboardingDetailsComponent } from '../../onboarding-details/onboarding-details.component';
import { BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { LeaveModalComponent } from '../modal/leave-form-modal/leave-modal/leave-modal.component';
import { Constants } from 'src/app/shared/Constants/constants';

@Injectable()
export class CreateGuardService  implements CanDeactivate<OnboardingDetailsComponent> {
  constructor() {}
  /**
   * @param  {OnboardingDetailsComponent} component
   * @returns boolean
   * Confirms with user if he wants to loose the data incase he left the form half filled.
   */
  canDeactivate(component: OnboardingDetailsComponent): boolean {
    if (component.studentForm.dirty && component.studentForm.invalid) {
      return confirm(Constants.GUARDMESSAGE);
    }
    return true;
  }

}
