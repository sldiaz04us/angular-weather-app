import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Current } from '../../core/api/openweather-api.model';
import { UnitsMeasurement } from '../../shared/enums/units-measurement.enum';

@Component({
  selector: 'dashboard-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopSectionComponent {
  @Input() current: Current;
  @Input() geolocationName: string;
  @Input() tempSymbol: string;
  @Input() unit: UnitsMeasurement;
  @Output() temperatureChanged = new EventEmitter<UnitsMeasurement>();

  changeTempToCelsius(): void {
    this.temperatureChanged.emit(UnitsMeasurement.metric);
  }

  changeTempToFahrenheit(): void {
    this.temperatureChanged.emit(UnitsMeasurement.imperial);
  }
}
