"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/calendar-view"
import { ListView } from "@/components/list-view"
import { FilterBar, type FilterState } from "@/components/filter-bar"
import { events } from "@/lib/data"
import { Calendar, List, Globe } from "lucide-react"
import useEventFilter from "@/hooks/eventFilter"

export default function Home() {
  const { filteredEvents, handleFilterChange } = useEventFilter(events)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      <div className="container py-8">
        <div className="mb-8 text-center">
          <p className="mt-2 text-lg text-secondary-600 text-tealpop">
            Discover, filter, and track crypto events worldwide.
          </p>
        </div>
      </div>

      <FilterBar onFilterChange={handleFilterChange} />

      <Tabs defaultValue="list" className="w-full">
        <div className="container py-4">
          <TabsList className="grid w-full max-w-md grid-cols-2 border bg-white">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-accent"
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </TabsTrigger>
            <TabsTrigger value="list" className="data-[state=active]:bg-accent">
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
