import { Component, OnInit, Input, Output } from '@angular/core';
import { Student } from '../../shared/model/students';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;
  
  @Output() actionPerformed = new EventEmitter<string>();
  
  constructor(private router: Router) { }

  deleteClicked(input: string) {
    this.actionPerformed.emit(input);
  }

  editClick(id : number) {
    this.router.navigate(['onboarding/edit',id]);
  }

  viewClicked(id : number) {
    this.router.navigate(['onboarding/view',id]);
  }

  ngOnInit() {
  }

}
