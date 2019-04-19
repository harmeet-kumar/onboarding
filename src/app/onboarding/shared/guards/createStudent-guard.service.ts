import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { OnboardingDetailsComponent } from '../../onboarding-details/onboarding-details.component';
import { BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { LeaveModalComponent } from '../modal/leave-form-modal/leave-modal/leave-modal.component';

@Injectable()
export class CreateGuardService  implements CanDeactivate<OnboardingDetailsComponent> {
  constructor(private modalService: BsModalService) {}

  canDeactivate(component: OnboardingDetailsComponent): boolean {
    // if (component.studentForm.dirty) {
    //   const subject = new Subject<boolean>();

    //   const modal = this.modalService.show(LeaveModalComponent, {'class': 'modal-dialog-primary'});
    //   modal.content.subject = subject;
    // }
    return true;
  }

}
