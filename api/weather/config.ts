// src/api/weather/config.ts
export const WEATHER_API_CONFIG = {
  baseUrl:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  apiKey: process.env.WEATHER_API_KEY,
  unitGroup: "metric",
} as const
