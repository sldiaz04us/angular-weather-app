import { EmptyStateTypes } from '../enums/empty-states.enum';
import { EmptyState } from '../models/empty-state.model';

export const emptyStates: EmptyState[] = [
  {
    id: EmptyStateTypes.GPS,
    imageSrc: 'assets/icons/global/gps-connection-illustration.svg',
    imageAlt: 'GPS illustration',
    title: 'No GPS connection',
    content: 'Please allow for location permission.',
    buttonText: 'Allow'
  },
  {
    id: EmptyStateTypes.GPS_BLOCKED,
    imageSrc: 'assets/icons/global/gps-connection-illustration.svg',
    imageAlt: 'GPS illustration',
    title: 'GPS Blocked',
    content: 'Use the browser menu options to select Always Ask when a site tries to get the current location.',
  },
  {
    id: EmptyStateTypes.NOT_IMPLEMENTED,
    imageSrc: 'assets/icons/global/not-implemented.svg',
    imageAlt: 'Feature not implemented',
    buttonText: 'Go to Dashboard'
  }
];
