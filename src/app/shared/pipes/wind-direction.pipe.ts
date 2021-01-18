import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {
  private readonly compass = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];

  transform(windDeg: number): string {
    if (windDeg > 360) {
      return this.compass[Math.round(windDeg % 360 / 22.5)];
    }
    return this.compass[Math.round(windDeg / 22.5)];
  }

}
