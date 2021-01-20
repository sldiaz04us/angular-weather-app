import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Current } from '../openweather-api.model';
import { UnitsMeasurement } from '../../shared/enums/units-measurement.enum';

@Component({
  selector: 'dashboard-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {
  @Input() current: Current;
  @Input() tempSymbol: string;
  @Input() unit: UnitsMeasurement;
  @Output() temperatureChanged = new EventEmitter<UnitsMeasurement>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTempToCelsius(): void {
    this.temperatureChanged.emit(UnitsMeasurement.metric);
  }

  changeTempToFahrenheit(): void {
    this.temperatureChanged.emit(UnitsMeasurement.imperial);
  }

}
