import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { EmptyState } from '../shared/models/empty-state.model';
import { EmptyStateService } from '../core/services/empty-state.service';
import { EmptyStateTypes } from '../shared/enums/empty-states.enum';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  implementationState: EmptyState;

  constructor(private route: Router,
    emptyStateService: EmptyStateService,
    title: Title
  ) {
    this.implementationState = emptyStateService.getEmptyState(EmptyStateTypes.NOT_IMPLEMENTED);
    title.setTitle('Settings - Weather App');
  }

  navigateToDashboard(): void {
    this.route.navigateByUrl('/dashboard');
  }
}
