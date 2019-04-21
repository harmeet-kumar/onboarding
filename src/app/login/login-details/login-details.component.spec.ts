import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDetailsComponent } from './login-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginDetailsComponent', () => {
  let component: LoginDetailsComponent;
  let fixture: ComponentFixture<LoginDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDetailsComponent, PageNotFoundComponent ],
      imports: [ReactiveFormsModule, AppRoutingModule],
      providers: [AuthenticationService,{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should RESET THE LOGIN FORM', () => {
    component.reset();
    expect(component.loginForm.controls.username.value).toBe('');
  });

  it('should SUBMIT THE LOGIN FORM', () => {
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });
});
