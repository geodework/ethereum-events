"use client"
import { EventCard } from "./event-card"
import type { Event } from "@/lib/data"
import { months } from "@/lib/data"

interface ListViewProps {
  events: Event[]
}

export function ListView({ events }: ListViewProps) {
  // Group events by month
  const eventsByMonth: Record<string, Event[]> = {}

  // Sort events by start date
  const sortedEvents = [...events].sort(
    (a, b) => a.startDate.getTime() - b.startDate.getTime()
  )

  // Group events by month
  sortedEvents.forEach((event) => {
    const month = event.startDate.getMonth()
    const monthName = months[month]

    if (!eventsByMonth[monthName]) {
      eventsByMonth[monthName] = []
    }

    eventsByMonth[monthName].push(event)
  })

  return (
    <div className="container py-6">
      <h2 className="mb-6 text-2xl font-bold font-cyberpunk uppercase tracking-widest text-cyberpunk-neonBlue drop-shadow-[0_0_8px_#00fff7]">
        Events Calendar {new Date().getFullYear()}
      </h2>

      {months.map((month) => {
        const monthEvents = eventsByMonth[month] || []

        if (monthEvents.length === 0) {
          return null
        }

        return (
          <div key={month} className="mb-10">
            <div className="mb-4 flex items-center gap-2 border-b-2 border-cyberpunk-neonBlue pb-2">
              <div className="h-5 w-1 rounded-full bg-gradient-to-b from-cyberpunk-neonBlue to-cyberpunk-neonPink shadow-[0_0_8px_0_#00fff7aa]"></div>
              <h3 className="text-xl font-bold font-cyberpunk text-cyberpunk-neonPink uppercase tracking-widest drop-shadow-[0_0_8px_#ff00ea]">
                {month}
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {monthEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
