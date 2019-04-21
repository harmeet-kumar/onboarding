import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Student } from '../../shared/model/students';
import { EventEmitter } from '@angular/core';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let student: Student;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent, ModalComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    student = new Student();
    student.category = "International";
    student.firstName = "Harmeet"
    student.lastName = "Kumar"
    student.id = 1;
    student.policeClearance = true;
    component.student = student;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
