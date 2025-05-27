import { WEATHER_API_CONFIG } from "./config"
import type { IWeatherData, IWeatherAverage } from "./types"

export class WeatherClient {
  private static instance: WeatherClient

  private constructor() {}

  static getInstance(): WeatherClient {
    if (!WeatherClient.instance) {
      WeatherClient.instance = new WeatherClient()
    }
    return WeatherClient.instance
  }

  async getWeatherData(
    location: string,
    startDate: string,
    endDate: string
  ): Promise<IWeatherData> {
    const url = `${WEATHER_API_CONFIG.baseUrl}/${location}/${startDate}/${endDate}?unitGroup=${WEATHER_API_CONFIG.unitGroup}&key=${WEATHER_API_CONFIG.apiKey}&include=days`
    console.log(url)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`)
    }

    return response.json()
  }

  calculateWeatherAverage(weatherData: IWeatherData): IWeatherAverage {
    if (weatherData.days.length === 0) {
      throw new Error("Cannot calculate average with no data")
    }

    const weather = {
      tempmax: -Infinity,
      tempmin: Infinity,
      temp: 0,
      humidity: 0,
    }
    const count = weatherData.days.length

    for (const day of weatherData.days) {
      weather.tempmax = Math.max(day.tempmax, weather.tempmax)
      weather.tempmin = Math.min(day.tempmin, weather.tempmin)
      weather.temp += day.temp
      weather.humidity += day.humidity
    }

    return {
      tempmax: Math.floor(weather.tempmax * 10) / 10,
      tempmin: Math.floor(weather.tempmin * 10) / 10,
      temp: Math.round((weather.temp / count) * 10) / 10,
      humidity: Math.round((weather.humidity / count) * 10) / 10,
    }
  }
}
