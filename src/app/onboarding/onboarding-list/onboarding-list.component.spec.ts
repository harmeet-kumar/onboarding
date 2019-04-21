import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingListComponent } from './onboarding-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterStudentsPipe } from '../shared/pipes/filter-students.pipe';
import { SearchStudentsPipe } from '../shared/pipes/search-students.pipe';
import { StudentComponent } from './student/student.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentOnboardingService } from '../shared/services/student-onboarding.service';
import { Student } from '../shared/model/students';
import { userInfo } from 'os';

describe('OnboardingListComponent', () => {
  let component: OnboardingListComponent;
  let fixture: ComponentFixture<OnboardingListComponent>;
  let service: StudentOnboardingService;
  let servicefixture: ComponentFixture<StudentOnboardingService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingListComponent,FilterStudentsPipe,SearchStudentsPipe,StudentComponent, ModalComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [StudentOnboardingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingListComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should DELETE DATA FROM THE DB THROUGH SERVICE', () => {
    let students = [];
    let user = new Student();
    user.id = 1;
    students.push(user);

    component.onBoardingService.students.next(students);
    component.deleteRecord(1);

    expect(component.onBoardingService.students.value.length).toBe(0);
  });

});
