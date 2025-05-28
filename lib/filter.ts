import { DEFAULT_FILTERS } from "./const"

export interface IFilterState {
  region: string
  month: string
  city: string
  isUpcomingOrOngoing: boolean
}

export const filterState: IFilterState = {
  region: DEFAULT_FILTERS.region,
  month: DEFAULT_FILTERS.month,
  city: "",
  isUpcomingOrOngoing: false,
}
