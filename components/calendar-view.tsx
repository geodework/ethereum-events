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
    const eventStartMonth = event.startDate.getMonth()
    const eventStartYear = event.startDate.getFullYear()
    const eventEndMonth = event.endDate.getMonth()
    const eventEndYear = event.endDate.getFullYear()

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
      const eventStart = new Date(event.startDate)
      const eventEnd = new Date(event.endDate)

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
                    {day.events.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className="mb-1 truncate rounded bg-gradient-to-r from-blue-50 to-blue-100 px-1 py-0.5 text-xs text-primary"
                        title={event.name}
                      >
                        {event.name}
                      </div>
                    ))}
                    {day.events.length > 2 && (
                      <div className="text-xs text-secondary-500">
                        +{day.events.length - 2} more
                      </div>
                    )}
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
          <EventCard key={event.id} event={event} />
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
