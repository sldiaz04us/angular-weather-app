import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { OpenWeatherApiResponse, AirPollutionApiResponse } from '../../dashboard/openweather-api.model';
import { UnitsMeasurement } from '../../shared/enums/units-measurement.enum';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  private currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
  private airPollutionApiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution?';

  staticWeatherDataResponse: OpenWeatherApiResponse = {
    lat: 29.7858,
    lon: -95.8244,
    timezone: 'America/Chicago',
    timezone_offset: -21600,
    current: {
      dt: 1610495448,
      sunrise: 1610457577,
      sunset: 1610495007,
      temp: 47.86,
      feels_like: 42.82,
      pressure: 1028,
      humidity: 61,
      dew_point: 35.08,
      uvi: 0,
      clouds: 90,
      visibility: 10000,
      wind_speed: 3.44,
      wind_deg: 290,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      snow: {
        '1h': 1
      }
    },
    hourly: [
      {
        dt: 1610492400,
        temp: 47.86,
        feels_like: 43.02,
        pressure: 1028,
        humidity: 61,
        dew_point: 35.08,
        uvi: 0.09,
        clouds: 90,
        visibility: 10000,
        wind_speed: 3.11,
        wind_deg: 305,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610496000,
        temp: 47.46,
        feels_like: 41.72,
        pressure: 1028,
        humidity: 59,
        dew_point: 33.87,
        uvi: 0,
        clouds: 79,
        visibility: 10000,
        wind_speed: 4.36,
        wind_deg: 324,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610499600,
        temp: 46.71,
        feels_like: 40.5,
        pressure: 1029,
        humidity: 61,
        dew_point: 34,
        uvi: 0,
        clouds: 98,
        visibility: 10000,
        wind_speed: 5.21,
        wind_deg: 335,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610503200,
        temp: 45.77,
        feels_like: 40.26,
        pressure: 1029,
        humidity: 65,
        dew_point: 34.7,
        uvi: 0,
        clouds: 99,
        visibility: 10000,
        wind_speed: 4.16,
        wind_deg: 354,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610506800,
        temp: 45.52,
        feels_like: 40.62,
        pressure: 1028,
        humidity: 65,
        dew_point: 34.45,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3,
        wind_deg: 18,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610510400,
        temp: 45.52,
        feels_like: 41.16,
        pressure: 1028,
        humidity: 64,
        dew_point: 34.14,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 1.95,
        wind_deg: 9,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610514000,
        temp: 45.54,
        feels_like: 41.61,
        pressure: 1028,
        humidity: 63,
        dew_point: 33.71,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 1.07,
        wind_deg: 340,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610517600,
        temp: 44.67,
        feels_like: 39.92,
        pressure: 1028,
        humidity: 63,
        dew_point: 33.21,
        uvi: 0,
        clouds: 94,
        visibility: 10000,
        wind_speed: 2.3,
        wind_deg: 284,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610521200,
        temp: 42.71,
        feels_like: 37.71,
        pressure: 1028,
        humidity: 66,
        dew_point: 32.47,
        uvi: 0,
        clouds: 22,
        visibility: 10000,
        wind_speed: 2.59,
        wind_deg: 244,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610524800,
        temp: 41.83,
        feels_like: 36.93,
        pressure: 1027,
        humidity: 69,
        dew_point: 32.45,
        uvi: 0,
        clouds: 11,
        visibility: 10000,
        wind_speed: 2.46,
        wind_deg: 251,
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610528400,
        temp: 41.23,
        feels_like: 35.51,
        pressure: 1027,
        humidity: 70,
        dew_point: 32.56,
        uvi: 0,
        clouds: 7,
        visibility: 10000,
        wind_speed: 3.87,
        wind_deg: 250,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610532000,
        temp: 40.51,
        feels_like: 34.61,
        pressure: 1026,
        humidity: 73,
        dew_point: 32.68,
        uvi: 0,
        clouds: 6,
        visibility: 10000,
        wind_speed: 4.27,
        wind_deg: 250,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610535600,
        temp: 39.87,
        feels_like: 33.06,
        pressure: 1026,
        humidity: 75,
        dew_point: 32.7,
        uvi: 0,
        clouds: 4,
        visibility: 10000,
        wind_speed: 5.88,
        wind_deg: 255,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610539200,
        temp: 39.34,
        feels_like: 32.63,
        pressure: 1027,
        humidity: 76,
        dew_point: 32.43,
        uvi: 0,
        clouds: 4,
        visibility: 10000,
        wind_speed: 5.68,
        wind_deg: 255,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610542800,
        temp: 39,
        feels_like: 32.76,
        pressure: 1027,
        humidity: 75,
        dew_point: 32,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 4.68,
        wind_deg: 274,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610546400,
        temp: 39.83,
        feels_like: 34.16,
        pressure: 1027,
        humidity: 75,
        dew_point: 32.58,
        uvi: 0.19,
        clouds: 0,
        visibility: 10000,
        wind_speed: 3.87,
        wind_deg: 265,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610550000,
        temp: 43.75,
        feels_like: 37.81,
        pressure: 1027,
        humidity: 66,
        dew_point: 33.42,
        uvi: 0.73,
        clouds: 0,
        visibility: 10000,
        wind_speed: 4.5,
        wind_deg: 251,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610553600,
        temp: 47.66,
        feels_like: 41.38,
        pressure: 1027,
        humidity: 58,
        dew_point: 33.69,
        uvi: 1.66,
        clouds: 0,
        visibility: 10000,
        wind_speed: 5.23,
        wind_deg: 256,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610557200,
        temp: 51.3,
        feels_like: 44.35,
        pressure: 1026,
        humidity: 52,
        dew_point: 34.34,
        uvi: 2.6,
        clouds: 0,
        visibility: 10000,
        wind_speed: 6.62,
        wind_deg: 244,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610560800,
        temp: 54.01,
        feels_like: 46.47,
        pressure: 1025,
        humidity: 49,
        dew_point: 35.38,
        uvi: 3.18,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.96,
        wind_deg: 239,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610564400,
        temp: 55.96,
        feels_like: 48.2,
        pressure: 1023,
        humidity: 46,
        dew_point: 36.03,
        uvi: 3.13,
        clouds: 0,
        visibility: 10000,
        wind_speed: 8.39,
        wind_deg: 240,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610568000,
        temp: 57.38,
        feels_like: 50.05,
        pressure: 1022,
        humidity: 44,
        dew_point: 36.05,
        uvi: 2.44,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.67,
        wind_deg: 236,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610571600,
        temp: 57.9,
        feels_like: 50.31,
        pressure: 1021,
        humidity: 45,
        dew_point: 36.77,
        uvi: 1.46,
        clouds: 0,
        visibility: 10000,
        wind_speed: 8.48,
        wind_deg: 225,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610575200,
        temp: 57.52,
        feels_like: 50.5,
        pressure: 1021,
        humidity: 47,
        dew_point: 37.76,
        uvi: 0.61,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.7,
        wind_deg: 224,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610578800,
        temp: 55.31,
        feels_like: 49.84,
        pressure: 1021,
        humidity: 56,
        dew_point: 39.94,
        uvi: 0.13,
        clouds: 0,
        visibility: 10000,
        wind_speed: 5.73,
        wind_deg: 214,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610582400,
        temp: 51.12,
        feels_like: 45.27,
        pressure: 1021,
        humidity: 61,
        dew_point: 38.35,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 5.84,
        wind_deg: 201,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610586000,
        temp: 49.46,
        feels_like: 43,
        pressure: 1021,
        humidity: 65,
        dew_point: 38.37,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 6.91,
        wind_deg: 194,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610589600,
        temp: 48.15,
        feels_like: 41.22,
        pressure: 1021,
        humidity: 68,
        dew_point: 38.26,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.74,
        wind_deg: 195,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610593200,
        temp: 46.99,
        feels_like: 39.51,
        pressure: 1021,
        humidity: 70,
        dew_point: 38.08,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 8.59,
        wind_deg: 198,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610596800,
        temp: 45.72,
        feels_like: 38.05,
        pressure: 1021,
        humidity: 72,
        dew_point: 37.47,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 8.75,
        wind_deg: 200,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610600400,
        temp: 44.76,
        feels_like: 37.47,
        pressure: 1020,
        humidity: 73,
        dew_point: 36.68,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.9,
        wind_deg: 203,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610604000,
        temp: 44.28,
        feels_like: 36.77,
        pressure: 1020,
        humidity: 73,
        dew_point: 36.37,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 8.14,
        wind_deg: 206,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610607600,
        temp: 43.83,
        feels_like: 36.88,
        pressure: 1019,
        humidity: 74,
        dew_point: 36.18,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.14,
        wind_deg: 212,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610611200,
        temp: 43.48,
        feels_like: 36.25,
        pressure: 1019,
        humidity: 74,
        dew_point: 36.05,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.56,
        wind_deg: 214,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610614800,
        temp: 43.05,
        feels_like: 35.85,
        pressure: 1018,
        humidity: 76,
        dew_point: 36.05,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.56,
        wind_deg: 216,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610618400,
        temp: 42.78,
        feels_like: 35.42,
        pressure: 1018,
        humidity: 77,
        dew_point: 36.27,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.87,
        wind_deg: 214,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610622000,
        temp: 42.49,
        feels_like: 35.64,
        pressure: 1018,
        humidity: 79,
        dew_point: 36.52,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.07,
        wind_deg: 218,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610625600,
        temp: 42.53,
        feels_like: 35.55,
        pressure: 1017,
        humidity: 80,
        dew_point: 36.82,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.43,
        wind_deg: 207,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610629200,
        temp: 42.64,
        feels_like: 35.87,
        pressure: 1018,
        humidity: 80,
        dew_point: 36.97,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.07,
        wind_deg: 204,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        pop: 0
      },
      {
        dt: 1610632800,
        temp: 43.81,
        feels_like: 36.68,
        pressure: 1018,
        humidity: 78,
        dew_point: 37.62,
        uvi: 0.2,
        clouds: 0,
        visibility: 10000,
        wind_speed: 7.85,
        wind_deg: 204,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610636400,
        temp: 49.32,
        feels_like: 40.82,
        pressure: 1018,
        humidity: 68,
        dew_point: 39.4,
        uvi: 0.79,
        clouds: 0,
        visibility: 10000,
        wind_speed: 10.87,
        wind_deg: 210,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610640000,
        temp: 54.43,
        feels_like: 45.79,
        pressure: 1018,
        humidity: 63,
        dew_point: 42.17,
        uvi: 1.78,
        clouds: 0,
        visibility: 10000,
        wind_speed: 12.15,
        wind_deg: 214,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610643600,
        temp: 58.5,
        feels_like: 49.5,
        pressure: 1017,
        humidity: 58,
        dew_point: 44.22,
        uvi: 2.79,
        clouds: 0,
        visibility: 10000,
        wind_speed: 13.42,
        wind_deg: 219,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610647200,
        temp: 61.43,
        feels_like: 52.75,
        pressure: 1017,
        humidity: 54,
        dew_point: 45.01,
        uvi: 3.43,
        clouds: 0,
        visibility: 10000,
        wind_speed: 13.2,
        wind_deg: 223,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610650800,
        temp: 63.68,
        feels_like: 55.09,
        pressure: 1016,
        humidity: 50,
        dew_point: 45.21,
        uvi: 3.45,
        clouds: 0,
        visibility: 10000,
        wind_speed: 13.04,
        wind_deg: 224,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610654400,
        temp: 65.17,
        feels_like: 57.06,
        pressure: 1015,
        humidity: 48,
        dew_point: 45.36,
        uvi: 2.69,
        clouds: 0,
        visibility: 10000,
        wind_speed: 12.33,
        wind_deg: 229,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610658000,
        temp: 65.75,
        feels_like: 57.88,
        pressure: 1014,
        humidity: 48,
        dew_point: 45.57,
        uvi: 1.6,
        clouds: 0,
        visibility: 10000,
        wind_speed: 12.1,
        wind_deg: 233,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      },
      {
        dt: 1610661600,
        temp: 65.26,
        feels_like: 59.05,
        pressure: 1013,
        humidity: 51,
        dew_point: 46.96,
        uvi: 0.6,
        clouds: 6,
        visibility: 10000,
        wind_speed: 9.64,
        wind_deg: 255,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        pop: 0
      }
    ],
    daily: [
      {
        dt: 1610474400,
        sunrise: 1610457577,
        sunset: 1610495007,
        temp: {
          day: 47.03,
          min: 32.63,
          max: 50.52,
          night: 45.54,
          eve: 47.46,
          morn: 32.68
        },
        feels_like: {
          day: 41.29,
          night: 41.61,
          eve: 41.72,
          morn: 26.44
        },
        pressure: 1030,
        humidity: 54,
        dew_point: 29.62,
        wind_speed: 3.67,
        wind_deg: 78,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 3.37
      },
      {
        dt: 1610560800,
        sunrise: 1610543972,
        sunset: 1610581456,
        temp: {
          day: 54.01,
          min: 39,
          max: 57.9,
          night: 44.76,
          eve: 51.12,
          morn: 39.34
        },
        feels_like: {
          day: 46.47,
          night: 37.47,
          eve: 45.27,
          morn: 32.63
        },
        pressure: 1025,
        humidity: 49,
        dew_point: 35.38,
        wind_speed: 7.96,
        wind_deg: 239,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 3.18
      },
      {
        dt: 1610647200,
        sunrise: 1610630365,
        sunset: 1610667907,
        temp: {
          day: 61.43,
          min: 42.49,
          max: 65.75,
          night: 50.04,
          eve: 57.42,
          morn: 42.53
        },
        feels_like: {
          day: 52.75,
          night: 41.72,
          eve: 52.88,
          morn: 35.55
        },
        pressure: 1017,
        humidity: 54,
        dew_point: 45.01,
        wind_speed: 13.2,
        wind_deg: 223,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 3.45
      },
      {
        dt: 1610733600,
        sunrise: 1610716757,
        sunset: 1610754357,
        temp: {
          day: 54.88,
          min: 42.17,
          max: 58.3,
          night: 46.49,
          eve: 50.22,
          morn: 42.17
        },
        feels_like: {
          day: 44.78,
          night: 40.8,
          eve: 42.39,
          morn: 34.48
        },
        pressure: 1022,
        humidity: 40,
        dew_point: 28.26,
        wind_speed: 11.32,
        wind_deg: 333,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 3.27
      },
      {
        dt: 1610820000,
        sunrise: 1610803148,
        sunset: 1610840808,
        temp: {
          day: 58.23,
          min: 41.85,
          max: 62.13,
          night: 51.48,
          eve: 54.81,
          morn: 41.85
        },
        feels_like: {
          day: 50.72,
          night: 45.3,
          eve: 49.03,
          morn: 33.84
        },
        pressure: 1021,
        humidity: 38,
        dew_point: 33.06,
        wind_speed: 7.18,
        wind_deg: 269,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 3.73
      },
      {
        dt: 1610906400,
        sunrise: 1610889537,
        sunset: 1610927260,
        temp: {
          day: 46.26,
          min: 43.86,
          max: 50.18,
          night: 43.86,
          eve: 45.75,
          morn: 50.18
        },
        feels_like: {
          day: 36.07,
          night: 39.7,
          eve: 40.68,
          morn: 41.94
        },
        pressure: 1022,
        humidity: 60,
        dew_point: 33.51,
        wind_speed: 12.06,
        wind_deg: 51,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d'
          }
        ],
        clouds: 100,
        pop: 1,
        rain: 2.82,
        uvi: 4
      },
      {
        dt: 1610992800,
        sunrise: 1610975924,
        sunset: 1611013711,
        temp: {
          day: 54.34,
          min: 40.19,
          max: 57.76,
          night: 47.35,
          eve: 51.37,
          morn: 40.19
        },
        feels_like: {
          day: 48.76,
          night: 41.56,
          eve: 45.46,
          morn: 35.35
        },
        pressure: 1023,
        humidity: 54,
        dew_point: 38.44,
        wind_speed: 5.3,
        wind_deg: 112,
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d'
          }
        ],
        clouds: 0,
        pop: 0,
        uvi: 4
      },
      {
        dt: 1611079200,
        sunrise: 1611062309,
        sunset: 1611100163,
        temp: {
          day: 51.46,
          min: 44.47,
          max: 52.36,
          night: 46.09,
          eve: 47.62,
          morn: 44.47
        },
        feels_like: {
          day: 43.2,
          night: 38.44,
          eve: 38.37,
          morn: 37.38
        },
        pressure: 1024,
        humidity: 61,
        dew_point: 38.73,
        wind_speed: 10.2,
        wind_deg: 58,
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10d'
          }
        ],
        clouds: 84,
        pop: 1,
        rain: 7.03,
        uvi: 4
      }
    ]
  };

  staticAirPollutionDataResponse: AirPollutionApiResponse = {
    coord: {
      lon: -95.8244,
      lat: 29.7858
    },
    list: [
      {
        main: {
          aqi: 3
        },
        components: {
          co: 257.02,
          no: 0,
          no2: 11.82,
          o3: 45.06,
          so2: 0.15,
          pm2_5: 3.04,
          pm10: 8.16,
          nh3: 1.79
        },
        dt: 1610848800
      }
    ]
  };

  constructor(private http: HttpClient) { }

  getCurrentAndForecastWeather(lat: number, lon: number, units: UnitsMeasurement = UnitsMeasurement.standard)
    : Observable<OpenWeatherApiResponse> {
    return this.http.get<OpenWeatherApiResponse>(`${this.currentWeatherApiUrl}lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${environment.openWeatherApiKey}`);
  }
  getStaticCurrentAndForecastWeather(lat: number, lon: number, units: UnitsMeasurement): Observable<OpenWeatherApiResponse> {
    return of(this.staticWeatherDataResponse);
  }

  getAirPollutionInfo(lat: number, lon: number): Observable<AirPollutionApiResponse> {
    return this.http.get<AirPollutionApiResponse>(`${this.airPollutionApiUrl}lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}`);
  }
  getStaticAirPollutionInfo(lat: number, lon: number): Observable<AirPollutionApiResponse> {
    return of(this.staticAirPollutionDataResponse);
  }
}
