import { Component, Input, OnInit } from '@angular/core';

import { Current } from '../openweather-api.model';

@Component({
  selector: 'dashboard-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {
  @Input() current: Current;

  constructor() { }

  ngOnInit(): void {
  }

}
