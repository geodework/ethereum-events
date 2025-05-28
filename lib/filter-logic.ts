import { Event } from "./data"
import { IFilterState } from "./filter"
import { DEFAULT_FILTERS } from "./const"

export interface EventFilter {
  apply(events: Event[], filters: IFilterState): Event[]
}

export class RegionFilter implements EventFilter {
  apply(events: Event[], filters: IFilterState): Event[] {
    if (filters.region === DEFAULT_FILTERS.region) return events
    return events.filter((event) => event.region === filters.region)
  }
}

export class MonthFilter implements EventFilter {
  apply(events: Event[], filters: IFilterState): Event[] {
    if (filters.month === DEFAULT_FILTERS.month) return events
    const monthIndex = new Date(`${filters.month} 1, 2024`).getMonth()
    return events.filter((event) => {
      const eventStartMonth = event.startDate.getMonth()
      const eventEndMonth = event.endDate.getMonth()
      return (
        eventStartMonth === monthIndex ||
        eventEndMonth === monthIndex ||
        (eventStartMonth < monthIndex && eventEndMonth > monthIndex)
      )
    })
  }
}

export class CityFilter implements EventFilter {
  apply(events: Event[], filters: IFilterState): Event[] {
    if (!filters.city) return events
    const cityLower = filters.city.toLowerCase()
    return events.filter(
      (event) =>
        event.city.toLowerCase().includes(cityLower) ||
        event.country.toLowerCase().includes(cityLower)
    )
  }
}

export class DeadlineSoonFilter implements EventFilter {
  apply(events: Event[], filters: IFilterState): Event[] {
    if (!filters.deadlineSoon) return events
    const now = new Date()
    return events.filter((event) => {
      const timeDiff = event.ticketDeadline.getTime() - now.getTime()
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
      return daysDiff <= 14 && daysDiff > 0
    })
  }
}

export const allEventFilters: EventFilter[] = [
  new RegionFilter(),
  new MonthFilter(),
  new CityFilter(),
  new DeadlineSoonFilter(),
]

export function applyAllFilters(
  events: Event[],
  filters: IFilterState
): Event[] {
  return allEventFilters.reduce(
    (evts, filter) => filter.apply(evts, filters),
    events
  )
}
