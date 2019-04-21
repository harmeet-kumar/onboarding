import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDetailsComponent } from './onboarding-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { Constants } from 'src/app/shared/Constants/constants';
import { Student } from '../shared/model/students';

describe('OnboardingDetailsComponent', () => {
  let component: OnboardingDetailsComponent;
  let pageCompenent: PageNotFoundComponent
  let fixture: ComponentFixture<OnboardingDetailsComponent>;
  let pageFixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingDetailsComponent,PageNotFoundComponent ],
      imports: [HttpClientModule, AppRoutingModule,ReactiveFormsModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDetailsComponent);
    pageFixture = TestBed.createComponent(PageNotFoundComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should SHOULD UPDATE UI FOR International Student', () => {
    component.updateCategoryFlag(Constants.INTERNATIONAL1);
    expect(component.isInternationStudent).toBe(true);
  });

  it('should SHOULD UPDATE UI FOR Domestic Student', () => {
    component.updateCategoryFlag(Constants.DOMESTIC2);
    expect(component.isDomesticStudent).toBe(true);
  });

  it('should UPDATE UI ON THE BASIS OF DATA FOR UPDATE/VIEW', () => {
    let student =  new Student();
    student.id = 1;
    component.fillEmployeeDetails(student);
    expect(component.idForUpdate).toBe(student.id);
  });

});
