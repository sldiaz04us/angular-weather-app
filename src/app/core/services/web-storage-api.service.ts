import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE } from '@ng-web-apis/common';

interface WeatherData {
  geolocationStatus: string;
  geolocationName: string;
  coords: { lat: number, lng: number };
}

@Injectable({
  providedIn: 'root'
})
export class WebStorageApiService {
  private readonly WEATHER_DATA = 'WEATHER_APP_DATA';

  constructor(@Inject(LOCAL_STORAGE) private readonly localStorage: Storage) {
  }

  getLocalStorageItem(): WeatherData {
    return JSON.parse(this.localStorage.getItem(this.WEATHER_DATA));
  }

  setLocalStorageItem(value: WeatherData): void {
    this.localStorage.setItem(this.WEATHER_DATA, JSON.stringify({ ...value }));
  }

  updateLocalStorageItem(value: Partial<WeatherData>): void {
    const weatherDataParse = this.getLocalStorageItem();
    this.setLocalStorageItem({ ...weatherDataParse, ...value });
  }
}
