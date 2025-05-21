"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/calendar-view"
import { ListView } from "@/components/list-view"
import { FilterBar, type FilterState } from "@/components/filter-bar"
import { events } from "@/lib/data"
import { Calendar, List, Globe } from "lucide-react"

export default function Home() {
  const [filteredEvents, setFilteredEvents] = useState(events)

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...events]

    // Filter by region
    if (filters.region !== "All Regions") {
      filtered = filtered.filter((event) => event.region === filters.region)
    }

    // Filter by month
    if (filters.month !== "All Months") {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-citypopSunsetStart via-citypopSunsetMid to-citypopSunsetEnd">
      <div className="container py-12">
        <div className="mb-4 text-center">
          <p className="mt-4 text-2xl text-citypopYellow font-citypop drop-shadow-neon">
            Discover, filter, and track crypto events worldwide.
          </p>
        </div>
      </div>

      <FilterBar onFilterChange={handleFilterChange} />

      <Tabs defaultValue="calendar" className="w-full">
        <div className="container py-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 border-2 border-citypopYellow bg-white/80 rounded-2xl shadow-lg mx-auto">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-citypopPink/30 data-[state=active]:to-citypopBlue/30 data-[state=active]:text-citypopPurple font-citypop text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" /> Calendar View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-citypopPink/30 data-[state=active]:to-citypopBlue/30 data-[state=active]:text-citypopPurple font-citypop text-lg"
            >
              <List className="mr-2 h-5 w-5" /> List View
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="calendar"
          className="mt-0 bg-white/80 rounded-2xl shadow-md"
        >
          <CalendarView events={filteredEvents} />
        </TabsContent>

        <TabsContent
          value="list"
          className="mt-0 bg-white/80 rounded-2xl shadow-md"
        >
          <ListView events={filteredEvents} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
