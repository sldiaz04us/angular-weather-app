import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router, emptyStateService: EmptyStateService) {
    this.implementationState = emptyStateService.getEmptyState(EmptyStateTypes.NOT_IMPLEMENTED);
  }

  navigateToDashboard(): void {
    this.route.navigateByUrl('/dashboard');
  }
}
