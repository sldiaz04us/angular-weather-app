import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';

import { Current, Daily } from '../../core/api/openweather-api.model';

@Component({
  selector: 'dashboard-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomSectionComponent {
  @Input() hourlyWeather: Current[];
  @Input() dailyWeather: Daily[];
  @Input() tempSymbol: string;
  readonly webBreakpoints: Observable<any>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.webBreakpoints = breakpointObserver.observe([Breakpoints.Web]);
  }
}
