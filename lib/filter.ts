import { DEFAULT_FILTERS } from "./const"
import { TVenueType } from "@/entities"

export interface IFilterState {
  region: string
  month: string
  city: string
  isUpcomingOrOngoing: boolean
  venueType: TVenueType
}

export const filterState: IFilterState = {
  region: DEFAULT_FILTERS.region,
  month: DEFAULT_FILTERS.month,
  city: "",
  isUpcomingOrOngoing: false,
  venueType: DEFAULT_FILTERS.venueType,
}
