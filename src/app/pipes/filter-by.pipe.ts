import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(value: Hero[], searchQuery: string): Hero[] {
    if (!searchQuery) return value;

    searchQuery.toLocaleLowerCase();

    return value.filter((hero) => {
      return hero.name.toLocaleLowerCase().includes(searchQuery);
    });
  }
}
