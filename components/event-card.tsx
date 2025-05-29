import { Calendar, Flag, Globe, MapPin, Thermometer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { TEventWithRelations } from "@/entities"

interface EventCardProps {
  event: TEventWithRelations
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
    <Card className="group h-full overflow-hidden border-secondary-200 transition-all hover:shadow-md">
      <CardHeader className="bg-gradient-to-r from-primary-light to-secondary-50 pb-2 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-primary-light-600">
              {event.name}
            </h3>
            <p className="text-sm text-secondary-500">{event.description}</p>
          </div>
          <Badge
            variant="outline"
            className="border border-primary-light-200 bg-white font-medium text-primary"
          >
            {event.region}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            {event.city}, {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Flag className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            Ticket Deadline: {formatDeadline(event.ticketDeadline)}
            {isDeadlineSoon() && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Soon
              </Badge>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            Avg. Temp: {event.temperature}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-secondary-100 bg-secondary-50 p-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
        >
          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
        >
          <Globe className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
