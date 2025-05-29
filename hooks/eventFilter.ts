import { DEFAULT_FILTERS } from "@/lib/const"
import { IFilterState } from "@/lib/filter"
import { events } from "@/lib/data"
import type { TEventWithRelations } from "@/entities"
import { create } from "zustand"
import { applyAllFilters } from "@/lib/filter-logic"

interface FilterStore {
  filters: IFilterState
  filteredEvents: TEventWithRelations[]
  handleChange: (key: keyof IFilterState, value: string | boolean) => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: {
    region: DEFAULT_FILTERS.region,
    month: DEFAULT_FILTERS.month,
    city: "",
    categories: [DEFAULT_FILTERS.category],
    domains: [DEFAULT_FILTERS.domain],
    venueType: DEFAULT_FILTERS.venueType,
    isUpcomingOrOngoing: false,
  },
  filteredEvents: events,
  handleChange: (key, value) => {
    const newFilters = { ...get().filters, [key]: value }
    set({ filters: newFilters })
    set({ filteredEvents: filterEvents(newFilters) })
  },
}))

export function filterEvents(filters: IFilterState): TEventWithRelations[] {
  return applyAllFilters(events, filters)
}
