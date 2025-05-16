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
        (event) => event.city.toLowerCase().includes(cityLower) || event.country.toLowerCase().includes(cityLower),
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container py-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary to-blue-500 p-4 shadow-lg">
            <Globe className="h-full w-full text-white" />
          </div>
          <h1 className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
            Ethereum Events
          </h1>
          <p className="mt-2 text-lg text-slate-600">Your global guide to crypto events and conferences</p>
        </div>
      </div>

      <FilterBar onFilterChange={handleFilterChange} />

      <Tabs defaultValue="calendar" className="w-full">
        <div className="container py-4">
          <TabsList className="grid w-full max-w-md grid-cols-2 border bg-white">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-blue-500/10 data-[state=active]:text-primary"
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-blue-500/10 data-[state=active]:text-primary"
            >
              <List className="mr-2 h-4 w-4" /> List View
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="calendar" className="mt-0 bg-white">
          <CalendarView events={filteredEvents} />
        </TabsContent>

        <TabsContent value="list" className="mt-0 bg-white">
          <ListView events={filteredEvents} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
