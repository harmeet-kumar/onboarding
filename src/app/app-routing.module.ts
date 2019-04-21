import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginGuardService } from './shared/guards/login-guard.service';
import { OnboardingGuardService } from './shared/guards/onboarding-guard.service';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: './onboarding/onboarding.module#OnboardingModule',
    canActivate: [LoginGuardService]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [OnboardingGuardService]
  },
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },{
    path: 'notfound',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
