import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingDetailsComponent } from './onboarding-details/onboarding-details.component';
import { OnboardingListComponent } from './onboarding-list/onboarding-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentComponent } from './onboarding-list/student/student.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SearchStudentsPipe } from './shared/pipes/search-students.pipe';
import { FilterStudentsPipe } from './shared/pipes/filter-students.pipe';
import { StudentGuardService } from './shared/guards/students-guard.service';
import { CreateGuardService } from './shared/guards/createStudent-guard.service';
import { LeaveModalComponent } from './shared/modal/leave-form-modal/leave-modal/leave-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LeaveModalComponent,OnboardingDetailsComponent, OnboardingListComponent, StudentComponent,ModalComponent, SearchStudentsPipe, FilterStudentsPipe],
  imports: [NgbModule.forRoot(),
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ], entryComponents: [
    LeaveModalComponent,
  ],
  providers: [StudentGuardService,CreateGuardService]
})
export class OnboardingModule { }
