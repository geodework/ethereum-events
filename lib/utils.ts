import { IWeatherAverage } from "@/api/weather/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts temperature from Celsius to Fahrenheit
 * @param celsius - Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
export function celsiusToFahrenheit(
  celsius: number,
  shouldRound: boolean = true
): number {
  const fahrenheit = (celsius * 9) / 5 + 32
  return shouldRound ? Math.round(fahrenheit * 10) / 10 : fahrenheit
}

export function formatTemperature(
  weatherMetrics: IWeatherAverage,
  isCelsius: boolean = true
): string {
  return `Max: ${
    !weatherMetrics?.tempmax
      ? "N/A"
      : isCelsius
        ? weatherMetrics?.tempmax
        : celsiusToFahrenheit(weatherMetrics?.tempmax)
  }°${isCelsius ? "C" : "F"} / Min: ${
    !weatherMetrics?.tempmin
      ? "N/A"
      : isCelsius
        ? weatherMetrics?.tempmin
        : celsiusToFahrenheit(weatherMetrics?.tempmin)
  }°${isCelsius ? "C" : "F"}`
}
