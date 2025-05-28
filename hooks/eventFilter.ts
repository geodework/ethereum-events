import { DEFAULT_FILTERS } from "@/lib/const"
import { IFilterState } from "@/lib/filter"
import { events, type Event } from "@/lib/data"
import { create } from "zustand"
import { applyAllFilters } from "@/lib/filter-logic"

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
  filteredEvents: events,
  handleChange: (key, value) => {
    const newFilters = { ...get().filters, [key]: value }
    set({ filters: newFilters })
    set({ filteredEvents: filterEvents(newFilters) })
  },
}))

export function filterEvents(filters: IFilterState): Event[] {
  return applyAllFilters(events, filters)
}
