import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStudents'
})
export class SearchStudentsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.firstName.toLocaleLowerCase().includes(searchText) || it.lastName.toLocaleLowerCase().includes(searchText);
    });
  }

}
