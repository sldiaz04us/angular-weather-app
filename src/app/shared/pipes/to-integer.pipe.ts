import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInteger'
})
export class ToIntegerPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
