import { TestBed } from '@angular/core/testing';

import { StudentOnboardingService } from './student-onboarding.service';
import { HttpClientModule } from '@angular/common/http';
import { Student } from '../model/students';

describe('StudentOnboardingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should ADD A NEW RECORD', () => {
    const service: StudentOnboardingService = TestBed.get(StudentOnboardingService);
    const user = new Student();
    
    user.firstName = "test";
    service.students.next([user]);
    service.addStudent(user)
    
    const name = service.students.value[0].firstName
    expect(name).toBe("test");
  });

  it('should UPDATE A RECORD ', () => {
    const service: StudentOnboardingService = TestBed.get(StudentOnboardingService);
    const user = new Student();
    
    user.firstName = "test";
    service.students.next([user]);
    service.addStudent(user)
    user.firstName = "test2"
    service.updateStudent(user,1);
    
    const name = service.students.value[0].firstName
    expect(name).toBe("test2");
  });

  it('should REMOVE DATA FROM DB', () => {
    const service: StudentOnboardingService = TestBed.get(StudentOnboardingService);
    const user = new Student();

    user.firstName = "test";
    service.students.next([user]);
    service.deleteStudent(1);
    
    const length = service.students.value.length
    expect(length).toBe(0);
  });

  it('should be created', () => {
    const service: StudentOnboardingService = TestBed.get(StudentOnboardingService);
    expect(service).toBeTruthy();
  });
});
