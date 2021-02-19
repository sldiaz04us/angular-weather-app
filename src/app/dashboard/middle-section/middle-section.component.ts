import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Current } from '../../core/api/openweather-api.model';

@Component({
  selector: 'dashboard-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleSectionComponent {
  @Input() current: Current;
  @Input() airPollutionIndex: number;
  @Input() unitSymbol: string;
}
