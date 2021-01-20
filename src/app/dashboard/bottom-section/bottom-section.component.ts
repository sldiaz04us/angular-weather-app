import { Component, Input, OnInit } from '@angular/core';

import { Current, Daily } from '../openweather-api.model';

@Component({
  selector: 'dashboard-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss']
})
export class BottomSectionComponent implements OnInit {
  @Input() hourlyWeather: Current[];
  @Input() dailyWeather: Daily[];
  @Input() tempSymbol: string;

  constructor() { }

  ngOnInit(): void {
  }

}
