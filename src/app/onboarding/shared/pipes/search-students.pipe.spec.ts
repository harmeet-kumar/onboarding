import { SearchStudentsPipe } from './search-students.pipe';
import { Student } from '../model/students';

describe('SearchStudentsPipe SHOULD SEARCH THE DATA USING NAME OF STUDENT', () => {

  it('Pipe SEARCHING FOR FIRST NAME Harmeet', () => {
    const pipe = new SearchStudentsPipe();
    let students = [];
    let user = new Student();
    user.firstName = "Harmeet"
    students.push(user);
    const text = "Harmeet";
    pipe.transform(students,text)
    expect(pipe.transform(students,text).length).toBe(1);
  });

  it('Pipe SEARCH IN LAST NAME Kumar', () => {
    const pipe = new SearchStudentsPipe();
    let students = [];
    let user = new Student();
    user.firstName = "Kumar"
    students.push(user);
    const text = "Kumar";
    pipe.transform(students,text)
    expect(pipe.transform(students,text).length).toBe(1);
  });

  it('create an instance', () => {
    const pipe = new SearchStudentsPipe();
    expect(pipe).toBeTruthy();
  });
});
