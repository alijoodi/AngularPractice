import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): unknown {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    const result = val * (9 / 5) + 32;

    return result + '°  ' + 'فارنهایت';
  }
}
