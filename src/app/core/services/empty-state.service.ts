import { Injectable } from '@angular/core';

import { EmptyStateTypes } from 'src/app/shared/enums/empty-states.enum';
import { EmptyState } from 'src/app/shared/models/empty-state.model';
import { emptyStates } from 'src/app/shared/constants/empty-states.assets';
@Injectable({
  providedIn: 'root'
})
export class EmptyStateService {

  getEmptyState(emptyStateType: EmptyStateTypes): EmptyState {
    return emptyStates.find(state => state.id === emptyStateType);
  }

}
