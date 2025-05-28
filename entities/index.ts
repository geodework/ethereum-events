import { IWeatherAverage } from "@/api/weather/types"
import { DEFAULT_FILTERS } from "@/lib/const"

export type TVenueType =
  | "in_person"
  | "virtual"
  | "hybrid"
  | (typeof DEFAULT_FILTERS)["venueType"]

export type TEventWithRelations = {
  id: number
  name: string
  location: string
  region: string
  country: string
  categories: string[]
  domains: string[]
  venue_type: TVenueType
  start_date_time: string
  end_date_time: string
  links: string[]
  socials: string[]
  communities: string[]
  has_timezone: boolean
  weather_metrics: IWeatherAverage[]
}
