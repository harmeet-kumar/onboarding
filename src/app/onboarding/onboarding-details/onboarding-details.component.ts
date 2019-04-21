import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../shared/model/students';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DocumentValidator } from '../validators/documents.validator';
import { Router, ActivatedRoute } from "@angular/router";
import { StudentOnboardingService } from "../shared/services/student-onboarding.service"
import { Constants } from 'src/app/shared/Constants/constants';

@Component({
  selector: 'app-onboarding-details',
  templateUrl: './onboarding-details.component.html',
  styleUrls: ['./onboarding-details.component.css']
})
export class OnboardingDetailsComponent implements OnInit {

  student :Student = new Student();
  studentForm: FormGroup;
  isInternationStudent: boolean = null;
  isDomesticStudent:boolean = null;
  categories = [Constants.INTERNATIONAL,Constants.DOMESTIC];
  editForm: boolean = false;
  viewForm: boolean = false;
  idForUpdate: number;

  /**
   * Created this variable for the guard
   */
  @ViewChild('studentForm') public createEmployeeForm: NgForm;

  constructor(private formBuilder: FormBuilder, private router: Router, public onBoardingService : StudentOnboardingService,
    private route: ActivatedRoute) {
  }

  
  /**
   * Getter for the form controls in HTML
   */
  get formControls() { return this.studentForm.controls; }

  /**
   * Create the form
   */
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      firstName: [this.student.firstName, Validators.required],
      lastName: [this.student.lastName, Validators.required],
      fatherName: [this.student.fatherName, Validators.required],
      motherName: [this.student.motherName, Validators.required],
      previousScore:[this.student.previousScore, [Validators.required,Validators.min(0),Validators.max(100)]],
      category: [this.student.category, Validators.required],
      dateOfBirth: [this.student.dateOfBirth,Validators.required],
      declaration: [this.student.declaration,Validators.required],
      domicile: [this.student.domicile,Validators.required],
      markSheets: [this.student.markSheets,Validators.required],
      passport: [this.student.passport],
      policeClearance: [this.student.policeClearance],
      birthCertificate: [this.student.birthCertificate,Validators.required]
    }, { validator: DocumentValidator});

    this.route.paramMap.subscribe(params => {
      const id = +params.get(Constants.ID);
      if (id) {
        const student = this.onBoardingService.getStudentFromId(id);
        this.fillEmployeeDetails(student);
        if(this.router.url.includes(Constants.EDIT)) {
          if(student.category == Constants.INTERNATIONAL) {
            this.isInternationStudent = true;
            this.isDomesticStudent = false;
          } else {
            this.isInternationStudent = false;
            this.isDomesticStudent = true;
          }
          this.editForm = true;
        } else {
          this.viewForm = true;
          this.disableFields();
        }
      } else {
        this.viewForm = false;
        this.editForm = false;
      }
    });
  }
  
  /**
   * @param  {Student} student
   * Fills the student details that is selected to view or delete
   */
  fillEmployeeDetails(student: Student) {
    this.studentForm.patchValue({
      firstName: student.firstName,
      lastName: student.lastName,
      fatherName: student.fatherName,
      motherName: student.motherName,
      previousScore: student.previousScore,
      category: student.category,
      dateOfBirth: student.dateOfBirth,
      declaration: student.declaration,
      domicile: student.domicile,
      markSheets: student.markSheets,
      passport: student.passport,
      policeClearance: student.policeClearance,
      birthCertificate: student.birthCertificate
    });
    this.studentForm.controls.category.setValue(student.category);
    this.idForUpdate = student.id;
  }
  
  /**
   * Disable the fields in case of view record.
   */
  disableFields() {
      this.studentForm.get('firstName').disable();
      this.studentForm.get('lastName').disable();
      this.studentForm.get('fatherName').disable();
      this.studentForm.get('motherName').disable();
      this.studentForm.get('dateOfBirth').disable();
      this.studentForm.get('previousScore').disable();   
      this.studentForm.get('category').disable();   
      this.studentForm.get('dateOfBirth').disable();   
      this.studentForm.get('declaration').disable();   
      this.studentForm.get('domicile').disable();   
      this.studentForm.get('markSheets').disable();   
      this.studentForm.get('passport').disable();   
      this.studentForm.get('policeClearance').disable();   
      this.studentForm.get('birthCertificate').disable();   
  } 
      
  
  /**
   * Perform the submit operation
   */
  onSubmit() {
    if(!this.editForm && !this.viewForm) {
      this.onBoardingService.addStudent(this.studentForm.value);
    } else if (this.editForm) {
      this.onBoardingService.updateStudent(this.studentForm.value,this.idForUpdate);
      this.editForm = false;
      this.viewForm = false;
      this.idForUpdate = null;
    } else {
      this.viewForm = false;
    }
    this.isDomesticStudent = false;
    this.isInternationStudent = false;
    this.router.navigate([Constants.ONBOARDINGPAGE, Constants.LIST]);
  }

  /**
   * Update the category flag
   */
  public updateCategoryFlag(value) {
      if(value != Constants.NULL) {
        if(value == Constants.INTERNATIONAL1) {
          this.isInternationStudent = true;
          this.isDomesticStudent = false;
        }  else if (value == Constants.DOMESTIC2) {
          this.isInternationStudent = false;
          this.isDomesticStudent = true;
        }
      } 
  }  
}
