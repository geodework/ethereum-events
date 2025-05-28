import { DEFAULT_FILTERS } from "@/lib/const"
import { IFilterState } from "@/lib/filter"
import { events as allEvents, type Event } from "@/lib/data"
import { create } from "zustand"

interface FilterStore {
  filters: IFilterState
  filteredEvents: Event[]
  handleChange: (key: keyof IFilterState, value: string | boolean) => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: {
    region: DEFAULT_FILTERS.region,
    month: DEFAULT_FILTERS.month,
    city: "",
    deadlineSoon: false,
  },
  filteredEvents: allEvents,
  handleChange: (key, value) => {
    const newFilters = { ...get().filters, [key]: value }
    set({ filters: newFilters })
    set({ filteredEvents: filterEvents(newFilters) })
  },
}))

function filterEvents(filters: IFilterState): Event[] {
  let filtered = [...allEvents]

  // Filter by region
  if (filters.region !== DEFAULT_FILTERS.region) {
    filtered = filtered.filter((event) => event.region === filters.region)
  }

  // Filter by month
  if (filters.month !== DEFAULT_FILTERS.month) {
    const monthIndex = new Date(`${filters.month} 1, 2024`).getMonth()
    filtered = filtered.filter((event) => {
      const eventStartMonth = event.startDate.getMonth()
      const eventEndMonth = event.endDate.getMonth()
      return (
        eventStartMonth === monthIndex ||
        eventEndMonth === monthIndex ||
        (eventStartMonth < monthIndex && eventEndMonth > monthIndex)
      )
    })
  }

  // Filter by city
  if (filters.city) {
    const cityLower = filters.city.toLowerCase()
    filtered = filtered.filter(
      (event) =>
        event.city.toLowerCase().includes(cityLower) ||
        event.country.toLowerCase().includes(cityLower)
    )
  }

  // Filter by deadline soon
  if (filters.deadlineSoon) {
    const now = new Date()
    filtered = filtered.filter((event) => {
      const timeDiff = event.ticketDeadline.getTime() - now.getTime()
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
      return daysDiff <= 14 && daysDiff > 0
    })
  }

  return filtered
}
