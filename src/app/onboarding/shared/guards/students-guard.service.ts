import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { StudentOnboardingService } from 'src/app/onboarding/shared/services/student-onboarding.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService  implements CanActivate {
  constructor(private _studentsService: StudentOnboardingService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const studentExists = !!this._studentsService.getStudentFromId(+route.paramMap.get('id'));

    if (studentExists) { 
        return true;
    } else {
        this._router.navigate(['/notfound']);
        return false;
    }
}

}
