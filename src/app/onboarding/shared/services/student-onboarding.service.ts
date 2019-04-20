import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Student} from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentOnboardingService {

  students: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    var studentList = JSON.parse(localStorage.getItem('students'));
    if(studentList && studentList.length != 0) {
      this.students.next(studentList);
    } else {
      this.getStudentsFromJSON();
    }
   }// http is initialized in the constructor to get data from json

  
   /**
    * function to get all the students saved in the pre-defined json
    */
  private getStudentsFromJSON() {
    this.http.get<Student[]>('assets/students.json').subscribe(data => {
      this.students.next(data);
    });
  }
  /**
   * return all students data
   */
  getStudents() {
    return this.students.getValue();
  }
  /**
   * @param  {number} studentID
   * returns the index of the student
   */
  getStudentFromId(studentID: number) {
    const allStudents = this.students.getValue();
    const index = allStudents.findIndex(student => student.id === studentID);
    if(index != -1){
      return allStudents[index];
    }
    return null;
  }
// localStorage.setItem('storeObj', JSON.stringify(myObj));
// var getObject = JSON.parse(localStorage.getItem('storeObj'));
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
  }
  /**
   * @param  {Student} updatedRecord
   * @param  {number} studentID
   * updates the record of the student using student ID.
   */
  updateStudent(updatedRecord:Student, studentID: number) {
    let allStudents = this.students.getValue();
    let index = allStudents.findIndex(student => student.id === studentID);
    updatedRecord.id = studentID;
    allStudents[index] = updatedRecord;
    this.students.next(allStudents);
  }
  
  /**
   * @param  {number} studentID
   * Delete the data of a student using student ID 
   */
  deleteStudent(studentID: number) {
    let allStudents = this.students.getValue();
    let i = 0;
    let index = allStudents.findIndex(student => student.id === studentID); //find index in your array
    allStudents.splice(index, 1);
    this.students.next(allStudents);
  }

  /**
   * Subscription to students list which will update data to local storage on any change.
   */
  userSubscription = this.students.subscribe(val => {
    console.log(val);
    localStorage.setItem('students', JSON.stringify(val));
  });
}
