import { OpenWeatherApiResponse, AirPollutionApiResponse } from './openweather-api.model';


export const staticWeatherDataInFahrenheit: OpenWeatherApiResponse = {
  lat: 29.7858,
  lon: -95.8244,
  timezone: 'America/Chicago',
  timezone_offset: -21600,
  current: {
    dt: 1611038621,
    sunrise: 1611062309,
    sunset: 1611100163,
    temp: 62.47,
    feels_like: 60.84,
    pressure: 1018,
    humidity: 94,
    dew_point: 60.73,
    uvi: 0,
    clouds: 40,
    visibility: 10000,
    wind_speed: 9.22,
    wind_deg: 150,
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n'
      }
    ]
  },
  hourly: [
    {
      dt: 1611036000,
      temp: 62.47,
      feels_like: 59.34,
      pressure: 1018,
      humidity: 94,
      dew_point: 60.73,
      uvi: 0,
      clouds: 40,
      visibility: 10000,
      wind_speed: 11.86,
      wind_deg: 153,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      pop: 0.39
    },
    {
      dt: 1611039600,
      temp: 62.74,
      feels_like: 60.01,
      pressure: 1018,
      humidity: 91,
      dew_point: 60.08,
      uvi: 0,
      clouds: 69,
      visibility: 10000,
      wind_speed: 10.71,
      wind_deg: 154,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      pop: 0.64
    },
    {
      dt: 1611043200,
      temp: 62.64,
      feels_like: 60.21,
      pressure: 1018,
      humidity: 91,
      dew_point: 59.97,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      wind_speed: 10.11,
      wind_deg: 151,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.84
    },
    {
      dt: 1611046800,
      temp: 62.78,
      feels_like: 60.19,
      pressure: 1018,
      humidity: 91,
      dew_point: 60.12,
      uvi: 0,
      clouds: 96,
      visibility: 10000,
      wind_speed: 10.49,
      wind_deg: 148,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.88
    },
    {
      dt: 1611050400,
      temp: 62.8,
      feels_like: 60.55,
      pressure: 1018,
      humidity: 91,
      dew_point: 60.13,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.89,
      wind_deg: 150,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.91,
      rain: {
        '1h': 0.26
      }
    },
    {
      dt: 1611054000,
      temp: 62.71,
      feels_like: 60.4,
      pressure: 1019,
      humidity: 91,
      dew_point: 60.3,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.93,
      wind_deg: 146,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.91,
      rain: {
        '1h': 0.21
      }
    },
    {
      dt: 1611057600,
      temp: 62.53,
      feels_like: 59.94,
      pressure: 1019,
      humidity: 91,
      dew_point: 60.1,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 10.31,
      wind_deg: 146,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.88,
      rain: {
        '1h': 0.25
      }
    },
    {
      dt: 1611061200,
      temp: 62.71,
      feels_like: 59.68,
      pressure: 1020,
      humidity: 90,
      dew_point: 59.85,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 11.01,
      wind_deg: 144,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.88,
      rain: {
        '1h': 0.24
      }
    },
    {
      dt: 1611064800,
      temp: 62.76,
      feels_like: 59.99,
      pressure: 1021,
      humidity: 89,
      dew_point: 59.56,
      uvi: 0.07,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.38,
      wind_deg: 145,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.88,
      rain: {
        '1h': 0.15
      }
    },
    {
      dt: 1611068400,
      temp: 62.98,
      feels_like: 60.51,
      pressure: 1022,
      humidity: 88,
      dew_point: 59.38,
      uvi: 0.26,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.78,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.85,
      rain: {
        '1h': 0.17
      }
    },
    {
      dt: 1611072000,
      temp: 63.41,
      feels_like: 60.78,
      pressure: 1023,
      humidity: 86,
      dew_point: 59.22,
      uvi: 0.92,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.91,
      wind_deg: 151,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.81,
      rain: {
        '1h': 0.18
      }
    },
    {
      dt: 1611075600,
      temp: 64.2,
      feels_like: 61.14,
      pressure: 1024,
      humidity: 83,
      dew_point: 59.04,
      uvi: 1.45,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.54,
      wind_deg: 150,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.78
    },
    {
      dt: 1611079200,
      temp: 65.08,
      feels_like: 61.74,
      pressure: 1024,
      humidity: 80,
      dew_point: 58.87,
      uvi: 1.76,
      clouds: 100,
      visibility: 10000,
      wind_speed: 10.94,
      wind_deg: 149,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.67
    },
    {
      dt: 1611082800,
      temp: 65.52,
      feels_like: 62.64,
      pressure: 1024,
      humidity: 79,
      dew_point: 58.89,
      uvi: 1.14,
      clouds: 99,
      visibility: 10000,
      wind_speed: 10.16,
      wind_deg: 149,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.07
    },
    {
      dt: 1611086400,
      temp: 65.88,
      feels_like: 63.61,
      pressure: 1023,
      humidity: 78,
      dew_point: 58.98,
      uvi: 0.89,
      clouds: 100,
      visibility: 10000,
      wind_speed: 9.08,
      wind_deg: 146,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.02
    },
    {
      dt: 1611090000,
      temp: 67.44,
      feels_like: 65.28,
      pressure: 1023,
      humidity: 74,
      dew_point: 59.23,
      uvi: 0.53,
      clouds: 93,
      visibility: 10000,
      wind_speed: 8.9,
      wind_deg: 141,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.06
    },
    {
      dt: 1611093600,
      temp: 68.49,
      feels_like: 66.56,
      pressure: 1023,
      humidity: 72,
      dew_point: 59.31,
      uvi: 0.41,
      clouds: 91,
      visibility: 10000,
      wind_speed: 8.63,
      wind_deg: 138,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.05
    },
    {
      dt: 1611097200,
      temp: 67.39,
      feels_like: 66.33,
      pressure: 1024,
      humidity: 75,
      dew_point: 59.27,
      uvi: 0.08,
      clouds: 84,
      visibility: 10000,
      wind_speed: 7.18,
      wind_deg: 137,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0.05
    },
    {
      dt: 1611100800,
      temp: 64.47,
      feels_like: 63.28,
      pressure: 1025,
      humidity: 80,
      dew_point: 58.41,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 6.76,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.01
    },
    {
      dt: 1611104400,
      temp: 63.39,
      feels_like: 62.24,
      pressure: 1026,
      humidity: 83,
      dew_point: 58.26,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 6.67,
      wind_deg: 139,
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
      dt: 1611108000,
      temp: 61.48,
      feels_like: 60.26,
      pressure: 1026,
      humidity: 87,
      dew_point: 57.76,
      uvi: 0,
      clouds: 88,
      visibility: 10000,
      wind_speed: 6.44,
      wind_deg: 139,
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
      dt: 1611111600,
      temp: 60.39,
      feels_like: 59.83,
      pressure: 1027,
      humidity: 90,
      dew_point: 57.49,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 5.19,
      wind_deg: 128,
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
      dt: 1611115200,
      temp: 59.77,
      feels_like: 59.72,
      pressure: 1028,
      humidity: 91,
      dew_point: 57.29,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      wind_speed: 4.09,
      wind_deg: 93,
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
      dt: 1611118800,
      temp: 59.38,
      feels_like: 58.66,
      pressure: 1028,
      humidity: 92,
      dew_point: 57.09,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 5.23,
      wind_deg: 49,
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
      dt: 1611122400,
      temp: 59.09,
      feels_like: 58.06,
      pressure: 1028,
      humidity: 92,
      dew_point: 56.82,
      uvi: 0,
      clouds: 86,
      visibility: 10000,
      wind_speed: 5.61,
      wind_deg: 48,
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
      dt: 1611126000,
      temp: 58.46,
      feels_like: 57.33,
      pressure: 1028,
      humidity: 92,
      dew_point: 56.3,
      uvi: 0,
      clouds: 81,
      visibility: 10000,
      wind_speed: 5.44,
      wind_deg: 58,
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
      dt: 1611129600,
      temp: 58.12,
      feels_like: 57.07,
      pressure: 1028,
      humidity: 93,
      dew_point: 56.14,
      uvi: 0,
      clouds: 78,
      visibility: 10000,
      wind_speed: 5.26,
      wind_deg: 65,
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
      dt: 1611133200,
      temp: 57.78,
      feels_like: 56.23,
      pressure: 1027,
      humidity: 93,
      dew_point: 55.98,
      uvi: 0,
      clouds: 77,
      visibility: 10000,
      wind_speed: 5.95,
      wind_deg: 64,
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
      dt: 1611136800,
      temp: 57.6,
      feels_like: 56.1,
      pressure: 1027,
      humidity: 94,
      dew_point: 55.92,
      uvi: 0,
      clouds: 80,
      visibility: 10000,
      wind_speed: 5.91,
      wind_deg: 63,
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
      dt: 1611140400,
      temp: 56.93,
      feels_like: 55,
      pressure: 1027,
      humidity: 94,
      dew_point: 55.47,
      uvi: 0,
      clouds: 69,
      visibility: 10000,
      wind_speed: 6.29,
      wind_deg: 63,
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
      dt: 1611144000,
      temp: 56.39,
      feels_like: 54.07,
      pressure: 1027,
      humidity: 95,
      dew_point: 55.17,
      uvi: 0,
      clouds: 60,
      visibility: 10000,
      wind_speed: 6.87,
      wind_deg: 67,
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
      dt: 1611147600,
      temp: 55.9,
      feels_like: 53.22,
      pressure: 1027,
      humidity: 96,
      dew_point: 54.86,
      uvi: 0,
      clouds: 64,
      visibility: 10000,
      wind_speed: 7.4,
      wind_deg: 73,
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
      dt: 1611151200,
      temp: 56.25,
      feels_like: 53.13,
      pressure: 1027,
      humidity: 95,
      dew_point: 55.06,
      uvi: 0.22,
      clouds: 69,
      visibility: 10000,
      wind_speed: 8.19,
      wind_deg: 81,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611154800,
      temp: 58.62,
      feels_like: 54.91,
      pressure: 1027,
      humidity: 89,
      dew_point: 55.56,
      uvi: 0.87,
      clouds: 75,
      visibility: 10000,
      wind_speed: 9.55,
      wind_deg: 88,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611158400,
      temp: 61.16,
      feels_like: 57.56,
      pressure: 1027,
      humidity: 83,
      dew_point: 56.03,
      uvi: 1.08,
      clouds: 80,
      visibility: 10000,
      wind_speed: 9.71,
      wind_deg: 92,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611162000,
      temp: 64.78,
      feels_like: 62.04,
      pressure: 1027,
      humidity: 75,
      dew_point: 56.98,
      uvi: 1.71,
      clouds: 71,
      visibility: 10000,
      wind_speed: 8.57,
      wind_deg: 108,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611165600,
      temp: 67.35,
      feels_like: 65.98,
      pressure: 1026,
      humidity: 71,
      dew_point: 57.78,
      uvi: 2.09,
      clouds: 76,
      visibility: 10000,
      wind_speed: 6.71,
      wind_deg: 130,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611169200,
      temp: 68.5,
      feels_like: 66.81,
      pressure: 1025,
      humidity: 70,
      dew_point: 58.55,
      uvi: 4.27,
      clouds: 98,
      visibility: 10000,
      wind_speed: 7.74,
      wind_deg: 147,
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
      dt: 1611172800,
      temp: 69.12,
      feels_like: 67.23,
      pressure: 1024,
      humidity: 70,
      dew_point: 59.16,
      uvi: 3.33,
      clouds: 98,
      visibility: 10000,
      wind_speed: 8.46,
      wind_deg: 151,
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
      dt: 1611176400,
      temp: 68.97,
      feels_like: 67.14,
      pressure: 1024,
      humidity: 71,
      dew_point: 59.29,
      uvi: 1.99,
      clouds: 98,
      visibility: 10000,
      wind_speed: 8.52,
      wind_deg: 153,
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
      dt: 1611180000,
      temp: 68.76,
      feels_like: 67.42,
      pressure: 1023,
      humidity: 72,
      dew_point: 59.61,
      uvi: 0.66,
      clouds: 99,
      visibility: 10000,
      wind_speed: 7.74,
      wind_deg: 149,
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
      dt: 1611183600,
      temp: 67.21,
      feels_like: 66.87,
      pressure: 1023,
      humidity: 77,
      dew_point: 59.97,
      uvi: 0.14,
      clouds: 99,
      visibility: 10000,
      wind_speed: 6.24,
      wind_deg: 136,
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
      dt: 1611187200,
      temp: 65.73,
      feels_like: 65.03,
      pressure: 1023,
      humidity: 80,
      dew_point: 59.67,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 6.64,
      wind_deg: 133,
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
      dt: 1611190800,
      temp: 64.33,
      feels_like: 63.3,
      pressure: 1023,
      humidity: 84,
      dew_point: 59.63,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 7.25,
      wind_deg: 136,
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
      dt: 1611194400,
      temp: 62.91,
      feels_like: 61.34,
      pressure: 1024,
      humidity: 88,
      dew_point: 59.32,
      uvi: 0,
      clouds: 90,
      visibility: 10000,
      wind_speed: 8.12,
      wind_deg: 135,
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
      dt: 1611198000,
      temp: 62.58,
      feels_like: 60.37,
      pressure: 1023,
      humidity: 88,
      dew_point: 59.09,
      uvi: 0,
      clouds: 92,
      visibility: 10000,
      wind_speed: 9.08,
      wind_deg: 142,
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
      dt: 1611201600,
      temp: 62.58,
      feels_like: 59.88,
      pressure: 1023,
      humidity: 88,
      dew_point: 59.13,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 9.95,
      wind_deg: 155,
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
      dt: 1611205200,
      temp: 62.67,
      feels_like: 60.12,
      pressure: 1022,
      humidity: 89,
      dew_point: 59.43,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 9.95,
      wind_deg: 166,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0
    }
  ],
  daily: [
    {
      dt: 1611079200,
      sunrise: 1611062309,
      sunset: 1611100163,
      temp: {
        day: 65.08,
        min: 59.38,
        max: 68.49,
        night: 59.38,
        eve: 64.47,
        morn: 62.53
      },
      feels_like: {
        day: 61.74,
        night: 58.66,
        eve: 63.28,
        morn: 59.94
      },
      pressure: 1024,
      humidity: 80,
      dew_point: 58.87,
      wind_speed: 10.94,
      wind_deg: 149,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 0.91,
      rain: 1.46,
      uvi: 1.76
    },
    {
      dt: 1611165600,
      sunrise: 1611148694,
      sunset: 1611186615,
      temp: {
        day: 67.35,
        min: 55.9,
        max: 69.12,
        night: 62.67,
        eve: 65.73,
        morn: 56.39
      },
      feels_like: {
        day: 65.98,
        night: 60.12,
        eve: 65.03,
        morn: 54.07
      },
      pressure: 1026,
      humidity: 71,
      dew_point: 57.78,
      wind_speed: 6.71,
      wind_deg: 130,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: 76,
      pop: 0,
      uvi: 4.27
    },
    {
      dt: 1611252000,
      sunrise: 1611235076,
      sunset: 1611273067,
      temp: {
        day: 70.7,
        min: 61.84,
        max: 74.03,
        night: 67.35,
        eve: 69.12,
        morn: 62.15
      },
      feels_like: {
        day: 68.92,
        night: 66.63,
        eve: 69.53,
        morn: 62.47
      },
      pressure: 1017,
      humidity: 78,
      dew_point: 63.66,
      wind_speed: 11.43,
      wind_deg: 208,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 90,
      pop: 0.69,
      rain: 0.81,
      uvi: 3.16
    },
    {
      dt: 1611338400,
      sunrise: 1611321457,
      sunset: 1611359520,
      temp: {
        day: 73.76,
        min: 65.52,
        max: 76.06,
        night: 65.52,
        eve: 69.73,
        morn: 66.74
      },
      feels_like: {
        day: 74.61,
        night: 64.53,
        eve: 69.78,
        morn: 66.04
      },
      pressure: 1013,
      humidity: 73,
      dew_point: 64.8,
      wind_speed: 7.54,
      wind_deg: 289,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 83,
      pop: 1,
      rain: 2.64,
      uvi: 0.54
    },
    {
      dt: 1611424800,
      sunrise: 1611407836,
      sunset: 1611445972,
      temp: {
        day: 60.03,
        min: 56.75,
        max: 61.56,
        night: 59.36,
        eve: 60.1,
        morn: 57.54
      },
      feels_like: {
        day: 54.81,
        night: 55.63,
        eve: 55.83,
        morn: 53.31
      },
      pressure: 1018,
      humidity: 71,
      dew_point: 50.85,
      wind_speed: 9.69,
      wind_deg: 80,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 99,
      pop: 0.01,
      uvi: 1
    },
    {
      dt: 1611511200,
      sunrise: 1611494214,
      sunset: 1611532425,
      temp: {
        day: 74.86,
        min: 60.06,
        max: 74.86,
        night: 69.66,
        eve: 70.81,
        morn: 64.06
      },
      feels_like: {
        day: 71.8,
        night: 69.89,
        eve: 70.47,
        morn: 65.17
      },
      pressure: 1013,
      humidity: 79,
      dew_point: 68.25,
      wind_speed: 17.16,
      wind_deg: 187,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 93,
      pop: 0.98,
      rain: 2.76,
      uvi: 1
    },
    {
      dt: 1611597600,
      sunrise: 1611580590,
      sunset: 1611618877,
      temp: {
        day: 73.8,
        min: 60.39,
        max: 73.8,
        night: 60.39,
        eve: 63.63,
        morn: 68.61
      },
      feels_like: {
        day: 70.59,
        night: 57.76,
        eve: 60.49,
        morn: 69.98
      },
      pressure: 1010,
      humidity: 77,
      dew_point: 66.18,
      wind_speed: 15.95,
      wind_deg: 211,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 97,
      pop: 1,
      rain: 2.3,
      uvi: 1
    },
    {
      dt: 1611684000,
      sunrise: 1611666965,
      sunset: 1611705330,
      temp: {
        day: 69.21,
        min: 55.9,
        max: 69.21,
        night: 62.24,
        eve: 63.81,
        morn: 55.9
      },
      feels_like: {
        day: 69.1,
        night: 64.02,
        eve: 64.27,
        morn: 53.73
      },
      pressure: 1012,
      humidity: 70,
      dew_point: 59.04,
      wind_speed: 5.35,
      wind_deg: 67,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: 36,
      pop: 0.29,
      uvi: 1
    }
  ]
};

export const staticWeatherDataInCelsius: OpenWeatherApiResponse = {
  lat: 29.7858,
  lon: -95.8244,
  timezone: 'America/Chicago',
  timezone_offset: -21600,
  current: {
    dt: 1611037969,
    sunrise: 1611062309,
    sunset: 1611100163,
    temp: 16.93,
    feels_like: 16.02,
    pressure: 1018,
    humidity: 94,
    dew_point: 15.96,
    uvi: 0,
    clouds: 75,
    visibility: 10000,
    wind_speed: 4.12,
    wind_deg: 150,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n'
      }
    ]
  },
  hourly: [
    {
      dt: 1611036000,
      temp: 16.93,
      feels_like: 15.19,
      pressure: 1018,
      humidity: 94,
      dew_point: 15.96,
      uvi: 0,
      clouds: 75,
      visibility: 10000,
      wind_speed: 5.3,
      wind_deg: 153,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      pop: 0.39
    },
    {
      dt: 1611039600,
      temp: 17.08,
      feels_like: 15.56,
      pressure: 1018,
      humidity: 91,
      dew_point: 15.6,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      wind_speed: 4.79,
      wind_deg: 154,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.64
    },
    {
      dt: 1611043200,
      temp: 17.02,
      feels_like: 15.67,
      pressure: 1018,
      humidity: 91,
      dew_point: 15.54,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 4.52,
      wind_deg: 151,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.84
    },
    {
      dt: 1611046800,
      temp: 17.1,
      feels_like: 15.66,
      pressure: 1018,
      humidity: 91,
      dew_point: 15.62,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 4.69,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.88,
    },
    {
      dt: 1611050400,
      temp: 17.11,
      feels_like: 15.86,
      pressure: 1018,
      humidity: 91,
      dew_point: 15.63,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.42,
      wind_deg: 150,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.91,
    },
    {
      dt: 1611054000,
      temp: 17.06,
      feels_like: 15.78,
      pressure: 1019,
      humidity: 91,
      dew_point: 15.72,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.44,
      wind_deg: 146,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.91,
    },
    {
      dt: 1611057600,
      temp: 16.96,
      feels_like: 15.52,
      pressure: 1019,
      humidity: 91,
      dew_point: 15.61,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 4.61,
      wind_deg: 146,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.88,
    },
    {
      dt: 1611061200,
      temp: 17.06,
      feels_like: 15.38,
      pressure: 1020,
      humidity: 90,
      dew_point: 15.47,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.92,
      wind_deg: 144,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      pop: 0.88,
    },
    {
      dt: 1611064800,
      temp: 17.09,
      feels_like: 15.55,
      pressure: 1021,
      humidity: 89,
      dew_point: 15.31,
      uvi: 0.07,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.64,
      wind_deg: 145,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.88,
    },
    {
      dt: 1611068400,
      temp: 17.21,
      feels_like: 15.84,
      pressure: 1022,
      humidity: 88,
      dew_point: 15.21,
      uvi: 0.26,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.37,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.85,
    },
    {
      dt: 1611072000,
      temp: 17.45,
      feels_like: 15.99,
      pressure: 1023,
      humidity: 86,
      dew_point: 15.12,
      uvi: 0.92,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.43,
      wind_deg: 151,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      pop: 0.81,
    },
    {
      dt: 1611075600,
      temp: 17.89,
      feels_like: 16.19,
      pressure: 1024,
      humidity: 83,
      dew_point: 15.02,
      uvi: 1.45,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.71,
      wind_deg: 150,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.78
    },
    {
      dt: 1611079200,
      temp: 18.38,
      feels_like: 16.52,
      pressure: 1024,
      humidity: 80,
      dew_point: 14.93,
      uvi: 1.76,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.89,
      wind_deg: 149,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.67
    },
    {
      dt: 1611082800,
      temp: 18.62,
      feels_like: 17.02,
      pressure: 1024,
      humidity: 79,
      dew_point: 14.94,
      uvi: 1.14,
      clouds: 99,
      visibility: 10000,
      wind_speed: 4.54,
      wind_deg: 149,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.07
    },
    {
      dt: 1611086400,
      temp: 18.82,
      feels_like: 17.56,
      pressure: 1023,
      humidity: 78,
      dew_point: 14.99,
      uvi: 0.89,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.06,
      wind_deg: 146,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.02
    },
    {
      dt: 1611090000,
      temp: 19.69,
      feels_like: 18.49,
      pressure: 1023,
      humidity: 74,
      dew_point: 15.13,
      uvi: 0.53,
      clouds: 93,
      visibility: 10000,
      wind_speed: 3.98,
      wind_deg: 141,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.06
    },
    {
      dt: 1611093600,
      temp: 20.27,
      feels_like: 19.2,
      pressure: 1023,
      humidity: 72,
      dew_point: 15.17,
      uvi: 0.41,
      clouds: 91,
      visibility: 10000,
      wind_speed: 3.86,
      wind_deg: 138,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      pop: 0.05
    },
    {
      dt: 1611097200,
      temp: 19.66,
      feels_like: 19.07,
      pressure: 1024,
      humidity: 75,
      dew_point: 15.15,
      uvi: 0.08,
      clouds: 84,
      visibility: 10000,
      wind_speed: 3.21,
      wind_deg: 137,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0.05
    },
    {
      dt: 1611100800,
      temp: 18.04,
      feels_like: 17.38,
      pressure: 1025,
      humidity: 80,
      dew_point: 14.67,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 3.02,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0.01
    },
    {
      dt: 1611104400,
      temp: 17.44,
      feels_like: 16.8,
      pressure: 1026,
      humidity: 83,
      dew_point: 14.59,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.98,
      wind_deg: 139,
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
      dt: 1611108000,
      temp: 16.38,
      feels_like: 15.7,
      pressure: 1026,
      humidity: 87,
      dew_point: 14.31,
      uvi: 0,
      clouds: 88,
      visibility: 10000,
      wind_speed: 2.88,
      wind_deg: 139,
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
      dt: 1611111600,
      temp: 15.77,
      feels_like: 15.46,
      pressure: 1027,
      humidity: 90,
      dew_point: 14.16,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 2.32,
      wind_deg: 128,
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
      dt: 1611115200,
      temp: 15.43,
      feels_like: 15.4,
      pressure: 1028,
      humidity: 91,
      dew_point: 14.05,
      uvi: 0,
      clouds: 87,
      visibility: 10000,
      wind_speed: 1.83,
      wind_deg: 93,
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
      dt: 1611118800,
      temp: 15.21,
      feels_like: 14.81,
      pressure: 1028,
      humidity: 92,
      dew_point: 13.94,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 2.34,
      wind_deg: 49,
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
      dt: 1611122400,
      temp: 15.05,
      feels_like: 14.48,
      pressure: 1028,
      humidity: 92,
      dew_point: 13.79,
      uvi: 0,
      clouds: 86,
      visibility: 10000,
      wind_speed: 2.51,
      wind_deg: 48,
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
      dt: 1611126000,
      temp: 14.7,
      feels_like: 14.07,
      pressure: 1028,
      humidity: 92,
      dew_point: 13.5,
      uvi: 0,
      clouds: 81,
      visibility: 10000,
      wind_speed: 2.43,
      wind_deg: 58,
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
      dt: 1611129600,
      temp: 14.51,
      feels_like: 13.93,
      pressure: 1028,
      humidity: 93,
      dew_point: 13.41,
      uvi: 0,
      clouds: 78,
      visibility: 10000,
      wind_speed: 2.35,
      wind_deg: 65,
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
      dt: 1611133200,
      temp: 14.32,
      feels_like: 13.46,
      pressure: 1027,
      humidity: 93,
      dew_point: 13.32,
      uvi: 0,
      clouds: 77,
      visibility: 10000,
      wind_speed: 2.66,
      wind_deg: 64,
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
      dt: 1611136800,
      temp: 14.22,
      feels_like: 13.39,
      pressure: 1027,
      humidity: 94,
      dew_point: 13.29,
      uvi: 0,
      clouds: 80,
      visibility: 10000,
      wind_speed: 2.64,
      wind_deg: 63,
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
      dt: 1611140400,
      temp: 13.85,
      feels_like: 12.78,
      pressure: 1027,
      humidity: 94,
      dew_point: 13.04,
      uvi: 0,
      clouds: 69,
      visibility: 10000,
      wind_speed: 2.81,
      wind_deg: 63,
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
      dt: 1611144000,
      temp: 13.55,
      feels_like: 12.26,
      pressure: 1027,
      humidity: 95,
      dew_point: 12.87,
      uvi: 0,
      clouds: 60,
      visibility: 10000,
      wind_speed: 3.07,
      wind_deg: 67,
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
      dt: 1611147600,
      temp: 13.28,
      feels_like: 11.79,
      pressure: 1027,
      humidity: 96,
      dew_point: 12.7,
      uvi: 0,
      clouds: 64,
      visibility: 10000,
      wind_speed: 3.31,
      wind_deg: 73,
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
      dt: 1611151200,
      temp: 13.47,
      feels_like: 11.74,
      pressure: 1027,
      humidity: 95,
      dew_point: 12.81,
      uvi: 0.22,
      clouds: 69,
      visibility: 10000,
      wind_speed: 3.66,
      wind_deg: 81,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611154800,
      temp: 14.79,
      feels_like: 12.73,
      pressure: 1027,
      humidity: 89,
      dew_point: 13.09,
      uvi: 0.87,
      clouds: 75,
      visibility: 10000,
      wind_speed: 4.27,
      wind_deg: 88,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611158400,
      temp: 16.2,
      feels_like: 14.2,
      pressure: 1027,
      humidity: 83,
      dew_point: 13.35,
      uvi: 1.08,
      clouds: 80,
      visibility: 10000,
      wind_speed: 4.34,
      wind_deg: 92,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611162000,
      temp: 18.21,
      feels_like: 16.69,
      pressure: 1027,
      humidity: 75,
      dew_point: 13.88,
      uvi: 1.71,
      clouds: 71,
      visibility: 10000,
      wind_speed: 3.83,
      wind_deg: 108,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611165600,
      temp: 19.64,
      feels_like: 18.88,
      pressure: 1026,
      humidity: 71,
      dew_point: 14.32,
      uvi: 2.09,
      clouds: 76,
      visibility: 10000,
      wind_speed: 3,
      wind_deg: 130,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      pop: 0
    },
    {
      dt: 1611169200,
      temp: 20.28,
      feels_like: 19.34,
      pressure: 1025,
      humidity: 70,
      dew_point: 14.75,
      uvi: 4.27,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.46,
      wind_deg: 147,
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
      dt: 1611172800,
      temp: 20.62,
      feels_like: 19.57,
      pressure: 1024,
      humidity: 70,
      dew_point: 15.09,
      uvi: 3.33,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.78,
      wind_deg: 151,
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
      dt: 1611176400,
      temp: 20.54,
      feels_like: 19.52,
      pressure: 1024,
      humidity: 71,
      dew_point: 15.16,
      uvi: 1.99,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.81,
      wind_deg: 153,
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
      dt: 1611180000,
      temp: 20.42,
      feels_like: 19.68,
      pressure: 1023,
      humidity: 72,
      dew_point: 15.34,
      uvi: 0.66,
      clouds: 99,
      visibility: 10000,
      wind_speed: 3.46,
      wind_deg: 149,
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
      dt: 1611183600,
      temp: 19.56,
      feels_like: 19.37,
      pressure: 1023,
      humidity: 77,
      dew_point: 15.54,
      uvi: 0.14,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.79,
      wind_deg: 136,
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
      dt: 1611187200,
      temp: 18.74,
      feels_like: 18.35,
      pressure: 1023,
      humidity: 80,
      dew_point: 15.37,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.97,
      wind_deg: 133,
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
      dt: 1611190800,
      temp: 17.96,
      feels_like: 17.39,
      pressure: 1023,
      humidity: 84,
      dew_point: 15.35,
      uvi: 0,
      clouds: 85,
      visibility: 10000,
      wind_speed: 3.24,
      wind_deg: 136,
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
      dt: 1611194400,
      temp: 17.17,
      feels_like: 16.3,
      pressure: 1024,
      humidity: 88,
      dew_point: 15.18,
      uvi: 0,
      clouds: 90,
      visibility: 10000,
      wind_speed: 3.63,
      wind_deg: 135,
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
      dt: 1611198000,
      temp: 16.99,
      feels_like: 15.76,
      pressure: 1023,
      humidity: 88,
      dew_point: 15.05,
      uvi: 0,
      clouds: 92,
      visibility: 10000,
      wind_speed: 4.06,
      wind_deg: 142,
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
      dt: 1611201600,
      temp: 16.99,
      feels_like: 15.49,
      pressure: 1023,
      humidity: 88,
      dew_point: 15.07,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 4.45,
      wind_deg: 155,
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
      dt: 1611205200,
      temp: 17.04,
      feels_like: 15.62,
      pressure: 1022,
      humidity: 89,
      dew_point: 15.24,
      uvi: 0,
      clouds: 95,
      visibility: 10000,
      wind_speed: 4.45,
      wind_deg: 166,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      pop: 0
    }
  ],
  daily: [
    {
      dt: 1611079200,
      sunrise: 1611062309,
      sunset: 1611100163,
      temp: {
        day: 18.38,
        min: 15.21,
        max: 20.27,
        night: 15.21,
        eve: 18.04,
        morn: 16.96
      },
      feels_like: {
        day: 16.52,
        night: 14.81,
        eve: 17.38,
        morn: 15.52
      },
      pressure: 1024,
      humidity: 80,
      dew_point: 14.93,
      wind_speed: 4.89,
      wind_deg: 149,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 100,
      pop: 0.91,
      rain: 1.73,
      uvi: 1.76
    },
    {
      dt: 1611165600,
      sunrise: 1611148694,
      sunset: 1611186615,
      temp: {
        day: 19.64,
        min: 13.28,
        max: 20.62,
        night: 17.04,
        eve: 18.74,
        morn: 13.55
      },
      feels_like: {
        day: 18.88,
        night: 15.62,
        eve: 18.35,
        morn: 12.26
      },
      pressure: 1026,
      humidity: 71,
      dew_point: 14.32,
      wind_speed: 3,
      wind_deg: 130,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: 76,
      pop: 0,
      uvi: 4.27
    },
    {
      dt: 1611252000,
      sunrise: 1611235076,
      sunset: 1611273067,
      temp: {
        day: 21.5,
        min: 16.58,
        max: 23.35,
        night: 19.64,
        eve: 20.62,
        morn: 16.75
      },
      feels_like: {
        day: 20.51,
        night: 19.24,
        eve: 20.85,
        morn: 16.93
      },
      pressure: 1017,
      humidity: 78,
      dew_point: 17.59,
      wind_speed: 5.11,
      wind_deg: 208,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 90,
      pop: 0.69,
      rain: 0.81,
      uvi: 3.16
    },
    {
      dt: 1611338400,
      sunrise: 1611321457,
      sunset: 1611359520,
      temp: {
        day: 23.2,
        min: 18.62,
        max: 24.48,
        night: 18.62,
        eve: 20.96,
        morn: 19.3
      },
      feels_like: {
        day: 23.67,
        night: 18.07,
        eve: 20.99,
        morn: 18.91
      },
      pressure: 1013,
      humidity: 73,
      dew_point: 18.22,
      wind_speed: 3.37,
      wind_deg: 289,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 83,
      pop: 1,
      rain: 2.64,
      uvi: 0.54
    },
    {
      dt: 1611424800,
      sunrise: 1611407836,
      sunset: 1611445972,
      temp: {
        day: 15.57,
        min: 13.75,
        max: 16.42,
        night: 15.2,
        eve: 15.61,
        morn: 14.19
      },
      feels_like: {
        day: 12.67,
        night: 13.13,
        eve: 13.24,
        morn: 11.84
      },
      pressure: 1018,
      humidity: 71,
      dew_point: 10.47,
      wind_speed: 4.33,
      wind_deg: 80,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 99,
      pop: 0.01,
      uvi: 1
    },
    {
      dt: 1611511200,
      sunrise: 1611494214,
      sunset: 1611532425,
      temp: {
        day: 23.81,
        min: 15.59,
        max: 23.81,
        night: 20.92,
        eve: 21.56,
        morn: 17.81
      },
      feels_like: {
        day: 22.11,
        night: 21.05,
        eve: 21.37,
        morn: 18.43
      },
      pressure: 1013,
      humidity: 79,
      dew_point: 20.14,
      wind_speed: 7.67,
      wind_deg: 187,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 93,
      pop: 0.98,
      rain: 2.76,
      uvi: 1
    },
    {
      dt: 1611597600,
      sunrise: 1611580590,
      sunset: 1611618877,
      temp: {
        day: 23.22,
        min: 15.77,
        max: 23.22,
        night: 15.77,
        eve: 17.57,
        morn: 20.34
      },
      feels_like: {
        day: 21.44,
        night: 14.31,
        eve: 15.83,
        morn: 21.1
      },
      pressure: 1010,
      humidity: 77,
      dew_point: 18.99,
      wind_speed: 7.13,
      wind_deg: 211,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 97,
      pop: 1,
      rain: 2.3,
      uvi: 1
    },
    {
      dt: 1611684000,
      sunrise: 1611666965,
      sunset: 1611705330,
      temp: {
        day: 20.67,
        min: 13.28,
        max: 20.67,
        night: 16.8,
        eve: 17.67,
        morn: 13.28
      },
      feels_like: {
        day: 20.61,
        night: 17.79,
        eve: 17.93,
        morn: 12.07
      },
      pressure: 1012,
      humidity: 70,
      dew_point: 15.02,
      wind_speed: 2.39,
      wind_deg: 67,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: 36,
      pop: 0.29,
      uvi: 1
    }
  ]
};

export const staticAirPollutionData: AirPollutionApiResponse = {
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
