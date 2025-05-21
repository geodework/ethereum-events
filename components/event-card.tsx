import { Calendar, Flag, Globe, MapPin, Thermometer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Event } from "@/lib/data"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const isDeadlineSoon = () => {
    const now = new Date()
    const timeDiff = event.ticketDeadline.getTime() - now.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return daysDiff <= 14 && daysDiff > 0
  }

  const formatDateRange = (start: Date, end: Date) => {
    const startMonth = start.toLocaleString("default", { month: "short" })
    const endMonth = end.toLocaleString("default", { month: "short" })

    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${end.getFullYear()}`
    } else {
      return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${end.getFullYear()}`
    }
  }

  const formatDeadline = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card className="rounded-xl border-2 border-neonPink bg-gradient-to-br from-[#23243a] via-[#23243a]/90 to-[#1a1b2e] shadow-[0_0_12px_2px_#ff3cac] font-orbitron text-neonBlue hover:border-neonYellow hover:shadow-[0_0_16px_4px_#ffe700] transition-all duration-200">
      <CardHeader className="bg-gradient-to-r from-blue-50/10 to-slate-900/10 pb-2 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-blue-600">
              {event.name}
            </h3>
            <p className="text-sm text-slate-500">{event.description}</p>
          </div>
          <Badge
            variant="outline"
            className="border border-neonBlue bg-transparent font-medium text-neonBlue"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <div className="w-full h-1 rounded-full bg-gradient-to-r from-neonPink via-neonYellow to-neonBlue" />
      <CardContent className="space-y-3 px-0 pb-2">
        <div className="flex items-center gap-2 text-sm px-6">
          <MapPin className="h-4 w-4 text-neonBlue" />
          <span className="text-slate-200">
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm px-6">
          <Calendar className="h-4 w-4 text-neonBlue" />
          <span className="text-slate-200">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm px-6">
          <Flag className="h-4 w-4 text-neonBlue" />
          <span className="text-slate-200">
            Ticket Deadline: {formatDeadline(event.ticketDeadline)}
            {isDeadlineSoon() && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm px-6">
          <Thermometer className="h-4 w-4 text-neonBlue" />
          <span className="text-slate-200">Avg. Temp: {event.temperature}</span>
        </div>
      </CardContent>
      <div className="w-full h-1 rounded-full bg-gradient-to-r from-neonBlue via-neonYellow to-neonPink" />
      <CardFooter className="flex gap-2 bg-transparent">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-neonBlue bg-transparent text-neonBlue hover:bg-neonBlue hover:text-black"
        >
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-neonBlue bg-transparent text-neonBlue hover:bg-neonBlue hover:text-black"
        >
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
