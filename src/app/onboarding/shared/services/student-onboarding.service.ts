import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Student} from '../model/students';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StudentOnboardingService {

  students: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getStudentsFromJSON();
   }// http is initialized in the constructor to get data from json

  /**
   * function to get all the students saved in the pre-defined json
   */
  private getStudentsFromJSON() {
    const url = '/assets/students.json';// url of the json
    this.http.get<Student[]>(url).subscribe(data => {
      this.students.next(data);
    });
  }

  getStudents() {
    return this.students.getValue();
  }

  getStudentFromId(studentID: number) {
    const allStudents = this.students.getValue();
    const index = allStudents.findIndex(student => student.id === studentID);
    if(index != -1){
      return allStudents[index];
    }
    return null;
  }

  /**
   * 
   * @param student model of Student
   * function to add a student to the students data
   */
  addStudent(student:Student) {
    const allStudents = this.students.getValue();
    let id = allStudents[allStudents.length-1].id // getting the index of last value added
    student.id = id+1;
    const updatedData = [...allStudents, student]; // updating the students array as behaviour subject
    this.students.next(updatedData);
    console.log(this.students.getValue());
  }

  updateStudent(updatedRecord:Student, studentID: number) {
    let allStudents = this.students.getValue();
    let index = allStudents.findIndex(student => student.id === studentID);
    updatedRecord.id = studentID;
    allStudents[index] = updatedRecord;
    this.students.next(allStudents);
    console.log(this.students.getValue());
  }
  

  deleteStudent(studentID: number) {
    let allStudents = this.students.getValue();
    let i = 0;
    let index = allStudents.findIndex(student => student.id === studentID); //find index in your array
    allStudents.splice(index, 1);
    this.students.next(allStudents);
    console.log(this.students.getValue());
  }
}
