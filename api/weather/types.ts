// src/api/weather/types.ts
export interface IWeatherData {
  days: {
    tempmax: number
    tempmin: number
    temp: number
    humidity: number
  }[]
}

export interface IWeatherAverage {
  tempmax: number
  tempmin: number
  temp: number
  humidity: number
}
