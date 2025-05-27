// api/weather/__tests__/client.test.ts
import { describe, it, expect } from "vitest"
import { WeatherClient } from "./client"
import type { WeatherData } from "./types"

describe("WeatherClient", () => {
  describe("calculateWeatherAverage", () => {
    it("should calculate correct averages for multiple days", () => {
      const weatherClient = WeatherClient.getInstance()

      const mockWeatherData: WeatherData = {
        days: [
          {
            tempmax: 25.5,
            tempmin: 15.5,
            temp: 20.5,
            humidity: 60.5,
          },
          {
            tempmax: 26.5,
            tempmin: 16.5,
            temp: 21.5,
            humidity: 61.5,
          },
          {
            tempmax: 24.5,
            tempmin: 14.5,
            temp: 19.5,
            humidity: 59.5,
          },
        ],
      }

      const result = weatherClient.calculateWeatherAverage(mockWeatherData)

      expect(result).toEqual({
        tempmax: 26.5,
        tempmin: 14.5,
        temp: 20.5,
        humidity: 60.5,
      })
    })

    it("should handle single day data", () => {
      const weatherClient = WeatherClient.getInstance()

      const mockWeatherData: WeatherData = {
        days: [
          {
            tempmax: 26.5,
            tempmin: 14.5,
            temp: 20.5,
            humidity: 60.5,
          },
        ],
      }

      const result = weatherClient.calculateWeatherAverage(mockWeatherData)

      expect(result).toEqual({
        tempmax: 26.5,
        tempmin: 14.5,
        temp: 20.5,
        humidity: 60.5,
      })
    })

    it("should round to 2 decimal places", () => {
      const weatherClient = WeatherClient.getInstance()

      const mockWeatherData: WeatherData = {
        days: [
          {
            tempmax: 25.3,
            tempmin: 15.6,
            temp: 20.999,
            humidity: 60.111,
          },
          {
            tempmax: 25.6,
            tempmin: 15.3,
            temp: 20.111,
            humidity: 60.999,
          },
        ],
      }

      const result = weatherClient.calculateWeatherAverage(mockWeatherData)
      expect(result).toEqual({
        tempmax: 25.6,
        tempmin: 15.3,
        temp: 20.6,
        humidity: 60.6,
      })
    })

    it("should handle empty days array", () => {
      const weatherClient = WeatherClient.getInstance()

      const mockWeatherData: WeatherData = {
        days: [],
      }

      expect(() =>
        weatherClient.calculateWeatherAverage(mockWeatherData)
      ).toThrow("Cannot calculate average with no data")
    })
  })
})
