import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value] || 'unknown';
  }
}
