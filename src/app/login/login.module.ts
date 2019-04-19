import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginDetailsComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
