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
    <Card className="group h-full overflow-hidden border-neonPink transition-all hover:shadow-neon">
      <CardHeader className="bg-gradient-to-r from-darkBg/80 to-neonCyan/10 pb-2 py-6 border-b-2 border-neonCyan">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-neonPink drop-shadow-[0_0_8px_#ff00cc] animate-neonGlow">
              {event.name}
            </h3>
            <p className="text-sm text-neonCyan">{event.description}</p>
          </div>
          <Badge
            variant="outline"
            className="border-2 border-neonPink bg-darkBg text-neonCyan font-extrabold animate-neonGlow"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex items-center gap-2 text-sm text-neonCyan">
          <MapPin className="h-4 w-4 text-neonPink" />
          <span>
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neonCyan">
          <Calendar className="h-4 w-4 text-neonPink" />
          <span>{formatDateRange(event.startDate, event.endDate)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neonCyan">
          <Flag className="h-4 w-4 text-neonPink" />
          <span>
            Ticket Deadline: {formatDeadline(event.ticketDeadline)}
            {isDeadlineSoon() && (
              <Badge
                variant="destructive"
                className="ml-2 text-xs border-2 border-neonYellow bg-neonYellow text-darkBg animate-neonGlow"
              >
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neonCyan">
          <Thermometer className="h-4 w-4 text-neonPink" />
          <span>Avg. Temp: {event.temperature}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t-2 border-neonPink bg-darkBg p-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-neonCyan bg-darkBg text-neonCyan hover:bg-neonCyan hover:text-darkBg hover:border-neonPink"
        >
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-neonCyan bg-darkBg text-neonCyan hover:bg-neonCyan hover:text-darkBg hover:border-neonPink"
        >
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
