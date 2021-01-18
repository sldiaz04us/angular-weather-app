import { Component, Input, OnInit } from '@angular/core';

import { Current } from '../openweather-api.model';

@Component({
  selector: 'dashboard-aside-section',
  templateUrl: './aside-section.component.html',
  styleUrls: ['./aside-section.component.scss']
})
export class AsideSectionComponent implements OnInit {
  @Input() current: Current;
  @Input() airPollutionIndex: number;
  @Input() unitSymbol: string;

  constructor() { }

  ngOnInit(): void {
  }

}
