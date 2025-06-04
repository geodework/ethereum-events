"use client"
import { EventCard } from "./event-card"
import type { TEventWithRelations } from "@/entities"
import { MONTHS } from "@/lib/filter"
import { useFilterStore } from "@/hooks/eventFilter"
import { AdBanner } from "./ad-banner"
import React from "react"

export function CardView() {
  const { filteredEvents: events } = useFilterStore()
  // Group events by month
  const eventsByMonth: Record<string, TEventWithRelations[]> = {}

  // Sort events by start date
  const sortedEvents = [...events].sort(
    (a, b) => a.startDateTime.getTime() - b.endDateTime.getTime()
  )

  // Group events by month
  sortedEvents.forEach((event) => {
    const month = event.startDateTime.getMonth()
    const monthName = MONTHS[month]

    if (!eventsByMonth[monthName]) {
      eventsByMonth[monthName] = []
    }

    eventsByMonth[monthName].push(event)
  })

  return (
    <div className="container py-6">
      <h2 className="mb-6 text-2xl font-bold text-primary">
        Events Calendar {new Date().getFullYear()}
      </h2>

      {MONTHS.map((month, idx) => {
        const monthEvents = eventsByMonth[month] || []

        if (monthEvents.length === 0) {
          return null
        }

        return (
          <div key={month} className="mb-10">
            <div className="mb-4 flex items-center gap-2 border-b border-secondary-200 pb-2">
              <div className="h-5 w-1 rounded-full bg-gradient-to-b from-primary to-primary-light-400"></div>
              <h3 className="text-xl font-semibold text-secondary-900">
                {month}
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {monthEvents.map((event, evIdx) => (
                <React.Fragment key={event.id}>
                  <EventCard key={event.id} event={event} />
                  {evIdx === 5 && <AdBanner className="my-0 py-6 md:h-full" />}
                </React.Fragment>
              ))}
            </div>
            {idx === 0 && <AdBanner />}
          </div>
        )
      })}
    </div>
  )
}
