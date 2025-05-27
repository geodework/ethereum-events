// src/api/weather/types.ts
export interface WeatherData {
  days: {
    tempmax: number
    tempmin: number
    temp: number
    humidity: number
  }[]
}

export interface WeatherAverage {
  tempmax: number
  tempmin: number
  temp: number
  humidity: number
}
