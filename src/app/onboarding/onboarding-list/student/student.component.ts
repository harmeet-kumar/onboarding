import { Component, OnInit, Input, Output } from '@angular/core';
import { Student } from '../../shared/model/students';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/Constants/constants';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  /**
   * @param  {Student;} student
   * @returns Student
   * child component for onboarding-list
   */
  @Input() student: Student;
  
  
  /**
   * Returns the action performed to parent component
   */
  @Output() actionPerformed = new EventEmitter<string>();
  
  constructor(private router: Router) { }
  /**
   * @param  {string} input
   * Emit the record for deletion to parent component
   */
  deleteClicked(input: string) {
    this.actionPerformed.emit(input);
  }

  /**
   * @param  {number} id
   * Edit the record selected using onboarding form
   */
  editClick(id : number) {
    this.router.navigate([Constants.EDITPAGE,id]);
  }

  /**
   * @param  {number} id
   * View the selected record in the form.
   */
  viewClicked(id : number) {
    this.router.navigate([Constants.VIEWPAGE,id]);
  }

  ngOnInit() {
  }

}
