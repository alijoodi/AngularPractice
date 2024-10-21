import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): unknown {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let result: number;
    if (inputType === 'cel' && outputType === 'fah') {
      result = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      result = (val - 32) * (5 / 9);
    } else {
      result = val;
    }
    let symbol: string;

    if (outputType) {
      symbol = outputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = inputType === 'cel' ? 'C' : 'F';
    }

    return `${result} °${symbol}`;
  }
}
