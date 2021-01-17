import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: number, format: string = 'mediumDate'): string {
    return formatDate(value * 1000, format, 'en-US');
  }

}
