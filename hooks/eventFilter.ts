import { FilterState } from "@/components/filter-bar"
import { DEFAULT_FILTERS } from "@/lib/const"
import { type Event } from "@/lib/data"
import { useState } from "react"

export default function useEventFilter(events: Event[]) {
  const [filteredEvents, setFilteredEvents] = useState(events)

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...events]

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

    setFilteredEvents(filtered)
  }

  return { filteredEvents, handleFilterChange }
}
