import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Current } from '../../core/api/openweather-api.model';

@Component({
  selector: 'dashboard-aside-section',
  templateUrl: './aside-section.component.html',
  styleUrls: ['./aside-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideSectionComponent {
  @Input() current: Current;
  @Input() airPollutionIndex: number;
  @Input() unitSymbol: string;
}
