import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean): string {
    console.log({ value, upper });

    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
