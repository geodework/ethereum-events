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
    <Card className="group h-full overflow-hidden transition-all hover:shadow-cyberpunk">
      <CardHeader className="bg-gradient-to-r from-cyberpunk-bg2 to-cyberpunk-bg3 pb-2 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-cyberpunk-neonBlue group-hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]">
              {event.name}
            </h3>
            <p className="text-sm text-cyberpunk-neonWhite/80">
              {event.description}
            </p>
          </div>
          <Badge
            variant="outline"
            className="border-cyberpunk-neonPink bg-cyberpunk-bg2 font-bold text-cyberpunk-neonPink drop-shadow-[0_0_8px_#ff00ea]"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-cyberpunk-neonYellow" />
          <span className="text-cyberpunk-neonWhite/90">
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-cyberpunk-neonBlue" />
          <span className="text-cyberpunk-neonWhite/90">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Flag className="h-4 w-4 text-cyberpunk-neonPink" />
          <span className="text-cyberpunk-neonWhite/90">
            Ticket Deadline:{" "}
            <span className="text-cyberpunk-neonYellow">
              {formatDeadline(event.ticketDeadline)}
            </span>
            {isDeadlineSoon() && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-cyberpunk-neonGreen" />
          <span className="text-cyberpunk-neonWhite/90">
            Avg. Temp:{" "}
            <span className="text-cyberpunk-neonGreen">
              {event.temperature}
            </span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t-2 border-cyberpunk-neonBlue bg-cyberpunk-bg3 p-3">
        <Button variant="outline" size="sm" className="flex-1">
          <Calendar className="mr-1 h-3 w-3 text-cyberpunk-neonBlue" /> Add to
          Calendar
        </Button>
        <Button variant="outline" size="sm">
          <Globe className="h-3 w-3 text-cyberpunk-neonPink" />
        </Button>
      </CardFooter>
    </Card>
  )
}
