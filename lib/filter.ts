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
