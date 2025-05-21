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
      <CardHeader className="relative bg-gradient-to-r from-citypopPink via-citypopPurple to-citypopBlue pb-2 py-6 rounded-t-3xl shadow-lg shadow-citypopPink/30 overflow-hidden">
        {/* City Pop geometric pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-lighten"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 20px), repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 20px)",
          }}
        />
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-citypopBlue group-hover:text-citypopPurple">
              {event.name}
            </h3>
            <p className="text-sm text-slate-500">{event.description}</p>
          </div>
          <Badge
            variant="outline"
            className="border border-citypopBlue/20 bg-white font-medium text-citypopBlue"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2 bg-white border-l-4 border-citypopPink/40 shadow-inner shadow-citypopBlue/10">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-citypopBlue" />
          <span className="text-slate-700">
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-citypopBlue" />
          <span className="text-slate-700">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Flag className="h-4 w-4 text-citypopBlue" />
          <span className="text-slate-700">
            Ticket Deadline: {formatDeadline(event.ticketDeadline)}
            {isDeadlineSoon() && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-citypopBlue" />
          <span className="text-slate-700">Avg. Temp: {event.temperature}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-slate-100 bg-slate-50 p-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-slate-200 bg-white text-slate-700 hover:bg-citypopBlue/10 hover:text-citypopBlue"
        >
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-200 bg-white text-slate-700 hover:bg-citypopBlue/10 hover:text-citypopBlue"
        >
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
