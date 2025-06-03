"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventCard } from "./event-card"
import { MONTHS } from "@/lib/filter"
import { useFilterStore } from "@/hooks/eventFilter"

export function CalendarView() {
  const { filteredEvents: events } = useFilterStore()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [highlightedEventId, setHighlightedEventId] = useState<number | null>(
    null
  )
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Filter events for the current month
  const filteredEvents = events.filter((event) => {
    const eventStartMonth = event.startDateTime.getMonth()
    const eventStartYear = event.startDateTime.getFullYear()
    const eventEndMonth = event.endDateTime.getMonth()
    const eventEndYear = event.endDateTime.getFullYear()

    // Include events that start, end, or span the current month
    return (
      (eventStartYear === currentYear && eventStartMonth === currentMonth) ||
      (eventEndYear === currentYear && eventEndMonth === currentMonth) ||
      (new Date(currentYear, currentMonth, 1) >=
        new Date(eventStartYear, eventStartMonth, 1) &&
        new Date(currentYear, currentMonth, 1) <=
          new Date(eventEndYear, eventEndMonth, 1))
    )
  })

  // Create calendar days array
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)

    // Check if there are events on this day
    const dayEvents = events.filter((event) => {
      const eventStart = new Date(event.startDateTime)
      const eventEnd = new Date(event.endDateTime)

      // Reset time part for comparison
      eventStart.setHours(0, 0, 0, 0)
      eventEnd.setHours(23, 59, 59, 999)
      date.setHours(12, 0, 0, 0)

      return date >= eventStart && date <= eventEnd
    })

    calendarDays.push({
      day,
      date,
      events: dayEvents,
    })
  }
  console.log(calendarDays)

  // Function to generate a solid background class based on event.id
  function getEventBgClass(eventId: string) {
    const colors = [
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-100",
      "bg-pink-200",
      "bg-purple-200",
      "bg-orange-200",
      "bg-teal-200",
      "bg-red-100",
    ]
    let hash = 0
    for (let i = 0; i < eventId.length; i++) {
      hash += eventId.charCodeAt(i)
    }
    return colors[hash % colors.length]
  }

  return (
    <div className="container py-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">
          {MONTHS[currentMonth]} {currentYear}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevMonth}
            className="border-secondary-200 hover:bg-blue-50 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMonth}
            className="border-secondary-200 hover:bg-blue-50 hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-7 gap-1 rounded-lg border border-secondary-200 bg-white p-1 shadow-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="p-2 text-center font-medium text-secondary-700"
          >
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`min-h-[100px] border p-1 ${
              day ? "bg-white" : "bg-secondary-50"
            } ${
              day && day.events.length > 0
                ? "border-blue-100"
                : "border-secondary-100"
            } rounded`}
          >
            {day && (
              <>
                <div className="text-right text-sm font-medium text-secondary-700">
                  {day.day}
                </div>
                {day.events.length > 0 && (
                  <div className="mt-1">
                    {day.events.map((event) => (
                      <div
                        key={event.id}
                        className={`mb-1 truncate rounded ${getEventBgClass(
                          event.id.toString()
                        )} px-1 py-0.5 text-xs text-primary hover:cursor-pointer`}
                        title={event.name}
                        onClick={() => {
                          const el = document.getElementById(
                            `event-card-${event.id}`
                          )
                          if (el) {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            })
                          }
                          setHighlightedEventId(event.id)
                          setTimeout(() => {
                            setHighlightedEventId(null)
                          }, 900)
                        }}
                      >
                        {event.name}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-xl font-semibold text-secondary-900">
        Events in {MONTHS[currentMonth]}
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <div
            id={`event-card-${event.id}`}
            key={event.id}
            className={
              `transition-all duration-800 ` +
              (highlightedEventId === event.id &&
                "border-4 border-accent ring-2 ring-accent/50 ring-blur-sm")
            }
          >
            <EventCard event={event} />
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <div className="col-span-full rounded-lg border border-secondary-200 bg-secondary-50 py-12 text-center text-secondary-500">
            No events found for {MONTHS[currentMonth]}
          </div>
        )}
      </div>
    </div>
  )
}
