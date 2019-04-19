import { TestBed } from '@angular/core/testing';

import { StudentOnboardingService } from './student-onboarding.service';

describe('StudentOnboardingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentOnboardingService = TestBed.get(StudentOnboardingService);
    expect(service).toBeTruthy();
  });
});
