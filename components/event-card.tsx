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
    <Card className="group h-full overflow-hidden border-slate-200 transition-all hover:shadow-md">
      <CardHeader className="bg-gradient-to-r from-white via-[#f3f4f6] to-[#e0e0e0] pb-2 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold font-display tracking-wide text-[#0f0c29] group-hover:text-[#00fff7] transition-colors">
              {event.name}
            </h3>
            <p className="text-sm text-slate-500">{event.description}</p>
          </div>
          <Badge
            variant="default"
            className="font-display bg-[#00fff7] text-black shadow-[0_0_6px_#00fff7AA]"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-slate-700">
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-blue-500" />
          <span className="text-slate-700">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Flag className="h-4 w-4 text-blue-500" />
          <span className="text-slate-700">
            Ticket Deadline: {formatDeadline(event.ticketDeadline)}
            {isDeadlineSoon() && (
              <Badge
                variant="secondary"
                className="ml-2 text-xs font-display bg-[#ff00ea] text-white shadow-[0_0_6px_#ff00eaAA]"
              >
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-blue-500" />
          <span className="text-slate-700">Avg. Temp: {event.temperature}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-slate-100 bg-slate-50 p-3">
        <Button variant="default" size="sm" className="flex-1 font-display">
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button variant="secondary" size="sm" className="font-display">
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
