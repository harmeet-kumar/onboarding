import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingDetailsComponent } from './onboarding-details/onboarding-details.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { StudentGuardService } from './shared/guards/students-guard.service';
import { CreateGuardService } from './shared/guards/createStudent-guard.service';

const routes: Routes = [{
  path: '',
  component: OnboardingDetailsComponent,
  canDeactivate: [CreateGuardService]
},{
  path: 'view/:id',
  component: OnboardingDetailsComponent,
  canActivate: [StudentGuardService]
},{
  path: 'edit/:id',
  component: OnboardingDetailsComponent,
  canActivate: [StudentGuardService]
},{
  path: 'list',
  component: OnboardingListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
