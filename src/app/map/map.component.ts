import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { EmptyStateService } from '../core/services/empty-state.service';
import { EmptyStateTypes } from '../shared/enums/empty-states.enum';
import { EmptyState } from '../shared/models/empty-state.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  implementationState: EmptyState;

  constructor(
    private route: Router,
    emptyStateService: EmptyStateService,
    title: Title
  ) {
    this.implementationState = emptyStateService.getEmptyState(EmptyStateTypes.NOT_IMPLEMENTED);
    title.setTitle('Radar map - Weather App');
  }

  navigateToDashboard(): void {
    this.route.navigateByUrl('/dashboard');
  }
}
