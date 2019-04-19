import { Component, OnInit } from '@angular/core';
import { StudentOnboardingService } from '../shared/services/student-onboarding.service'

@Component({
  selector: 'app-onboarding-list',
  templateUrl: './onboarding-list.component.html',
  styleUrls: ['./onboarding-list.component.css']
})
export class OnboardingListComponent implements OnInit {

  constructor(public onBoardingService: StudentOnboardingService) {
  }

  ngOnInit() {
  }

  deleteRecord(id: number) {
    debugger
    this.onBoardingService.deleteStudent(+id);
  }
}
