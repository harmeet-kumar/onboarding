import { FilterStudentsPipe } from './filter-students.pipe';
import { Student } from '../model/students';

describe('FilterStudentsPipe SHOULD FILTER DATA FOR STUDENTS', () => {

  it('Pipe SHOULD RETURN THE RECORDS oF DOMESTIC STUDENTS ONLY', () => {
    const pipe = new FilterStudentsPipe();
    let students = [];
    let user = new Student();
    user.category = "domestic"
    students.push(user);
    const text = "domestic";
    pipe.transform(students,text)
    expect(pipe.transform(students,text).length).toBe(1);
  });

  it('Pipe SHOULD RETURN THE RECORDS oF INTERNATIONAL STUDENTS ONLY', () => {
    const pipe = new FilterStudentsPipe();
    let students = [];
    let user = new Student();
    user.category = "International"
    students.push(user);
    const text = "International";
    pipe.transform(students,text)
    expect(pipe.transform(students,text).length).toBe(1);
  });

  it('create an instance', () => {
    const pipe = new FilterStudentsPipe();
    expect(pipe).toBeTruthy();
  });
});
