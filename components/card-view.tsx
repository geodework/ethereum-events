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

  // Check if there are any events to display
  const hasEvents = Object.values(eventsByMonth).some(monthEvents => monthEvents.length > 0)

  return (
    <div className="container py-6">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        Events Calendar {new Date().getFullYear()}
      </h2>

      {!hasEvents ? (
        // Empty state
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 text-6xl opacity-50">🎪</div>
          <h3 className="mb-2 text-xl font-semibold text-secondary-700">
            No events found
          </h3>
          <p className="mb-6 text-secondary-500 max-w-md">
            We couldn't find any events matching your current filters. Try adjusting your search criteria or browse all events.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="web3-button-primary"
          >
            Show All Events
          </button>
        </div>
      ) : (
        MONTHS.map((month, idx) => {
          const monthEvents = eventsByMonth[month] || []

          if (monthEvents.length === 0) {
            return null
          }

          return (
            <div key={month} className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent"></div>
                <h3 className="text-xl font-semibold text-secondary-900">
                  {month}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-secondary-200 to-transparent"></div>
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
        })
      )}
    </div>
  )
}
