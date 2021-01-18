import { Component, Input, OnInit } from '@angular/core';

import { Current } from '../openweather-api.model';

@Component({
  selector: 'dashboard-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss']
})
export class MiddleSectionComponent implements OnInit {
  @Input() current: Current;
  @Input() airPollutionIndex: number;
  @Input() unitSymbol: string;

  constructor() { }

  ngOnInit(): void {
  }

}
