import { TVenueType } from "@/entities"

export interface IFilterState {
  region: string
  month: string
  city: string
  isUpcomingOrOngoing: boolean
  venueType: TVenueType
  categories: string[]
  domains: string[]
}

export const DEFAULT_FILTERS = {
  region: "All Regions",
  month: "All Months",
  domain: "All Domains",
  category: "All Categories",
  venueType: "All Venue Types",
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const VENUE_TYPE_NAMES: {
  [key in TVenueType]: string
} = {
  in_person: "Onsite",
  virtual: "Online",
  hybrid: "Hybrid",
}
