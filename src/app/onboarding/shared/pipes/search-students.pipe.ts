import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStudents'
})
export class SearchStudentsPipe implements PipeTransform {

  transform(students: any[], searchText: string): any[] {

    if (!students) {
      return [];
    }
    if (!searchText) {
      return students;
    }
    
    searchText = searchText.toLocaleLowerCase();
    
    /**
     * compares the entered text with students first name or last name
     */
    return students.filter(student => {
      return student.firstName.toLocaleLowerCase().includes(searchText) || student.lastName.toLocaleLowerCase().includes(searchText);
    });
  }

}
