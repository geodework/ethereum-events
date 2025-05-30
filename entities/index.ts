import { IWeatherAverage } from "@/api/weather/types"
import { DEFAULT_FILTERS } from "@/lib/filter"

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
  venueType: TVenueType
  startDateTime: Date
  endDateTime: Date
  links: string[]
  socials: string[]
  communities: string[]
  hasTimezone: boolean
  weatherMetrics: IWeatherAverage
}
