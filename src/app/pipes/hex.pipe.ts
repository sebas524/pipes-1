import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'hex',
})
export class HexPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value];
  }
}
