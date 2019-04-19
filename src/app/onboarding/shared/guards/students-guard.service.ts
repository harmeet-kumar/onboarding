import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { StudentOnboardingService } from 'src/app/onboarding/shared/services/student-onboarding.service';
import { Constants } from 'src/app/shared/Constants/constants';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService  implements CanActivate {

  constructor(private _studentsService: StudentOnboardingService,
    private _router: Router) { }

  /**
   * @param  {ActivatedRouteSnapshot} route
   * @param  {RouterStateSnapshot} state
   * @returns boolean
   * Guard to check if the requested record exists or not. This prevents the manual hit to a student ID.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const studentExists = !!this._studentsService.getStudentFromId(+route.paramMap.get(Constants.ID));

    if (studentExists) { 
        return true;
    } else {
        this._router.navigate([Constants.NOTFOUNDPAGE]);
        return false;
    }
  }

}
