export interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number;
}
export interface GeolocationCoordinates {
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  latitude: number;
  longitude: number;
  speed?: number;
}
export interface GeolocationPositionError {
  code: number;
  message: string;
}
