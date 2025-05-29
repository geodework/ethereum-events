import { TEventWithRelations } from "@/entities"
import { IFilterState } from "./filter"
import { DEFAULT_FILTERS } from "./const"

export interface EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[]
}

export class RegionFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.region === DEFAULT_FILTERS.region) return events
    return events.filter((event) => event.region === filters.region)
  }
}

export class MonthFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.month === DEFAULT_FILTERS.month) return events

    // Year is not important, we just need to get the month index.
    const monthIndex = new Date(`${filters.month} 1, 9999`).getMonth()
    return events.filter((event) => {
      const eventStartMonth = event.start_date_time.getMonth()
      const eventEndMonth = event.end_date_time.getMonth()
      return (
        eventStartMonth === monthIndex ||
        eventEndMonth === monthIndex ||
        (eventStartMonth < monthIndex && eventEndMonth > monthIndex)
      )
    })
  }
}

export class CityFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (!filters.city) return events

    const cityLower = filters.city.toLowerCase()
    return events.filter(
      (event) =>
        event.location.toLowerCase().includes(cityLower) ||
        event.country.toLowerCase().includes(cityLower)
    )
  }
}

export class CategoryFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (
      filters.categories.length === 1 &&
      filters.categories[0] === DEFAULT_FILTERS.category
    )
      return events
    return events.filter((event) =>
      filters.categories.some((category) => event.categories.includes(category))
    )
  }
}

export class UpcomingOrOngoingFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (!filters.isUpcomingOrOngoing) return events
    const now = new Date()
    return events.filter((event) => new Date(event.end_date_time) >= now)
  }
}

export class VenueTypeFilter implements EventFilter {
  apply(
    events: TEventWithRelations[],
    filters: IFilterState
  ): TEventWithRelations[] {
    if (filters.venueType === DEFAULT_FILTERS.venueType) return events
    return events.filter((event) => event.venue_type === filters.venueType)
  }
}

export const allEventFilters: EventFilter[] = [
  new RegionFilter(),
  new MonthFilter(),
  new CityFilter(),
  new CategoryFilter(),
  new UpcomingOrOngoingFilter(),
  new VenueTypeFilter(),
]

export function applyAllFilters(
  events: TEventWithRelations[],
  filters: IFilterState
): TEventWithRelations[] {
  return allEventFilters.reduce(
    (evts, filter) => filter.apply(evts, filters),
    events
  )
}
