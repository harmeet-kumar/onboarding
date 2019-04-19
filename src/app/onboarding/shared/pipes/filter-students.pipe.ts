import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: any[], searchText: string): any[] {
    if (!students) {
      return [];
    }
    if (!searchText) {
      return students;
    }

    /**
     * Filter data on the basis on category i.e. Domestic or International
     */
    return students.filter(student => {
      return student.category == searchText;
    });
  }

}
