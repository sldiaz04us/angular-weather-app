import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'airPollution'
})
export class AirPollutionPipe implements PipeTransform {
  private readonly airPollution = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  transform(value: number): string {
    return this.airPollution[value - 1];
  }

}
