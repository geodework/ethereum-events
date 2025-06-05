import React from "react"
import { Calendar, Flag, Globe, MapPin, Thermometer } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { TEventWithRelations } from "@/entities"
import { CATEGORY_META, VENUE_TYPE_NAMES } from "@/lib/filter"
import { EventTypeBadge, getVenueTypeBadgeVariant } from "./event-type-badge"
import { IconChip } from "./icon-chip"
import { formatTemperature } from "@/lib/utils"
import { useCardState } from "@/hooks/cardState"
import { SocialLinkIcon } from "./social-link-icon"
import { countryEmojis } from "@/lib/country"

interface EventCardProps {
  event: TEventWithRelations
}

export function EventCard({ event }: EventCardProps) {
  const { isCelsius } = useCardState()

  const formatDateRange = (start: Date, end: Date) => {
    const startMonth = start.toLocaleString("default", { month: "short" })
    const endMonth = end.toLocaleString("default", { month: "short" })

    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()} - ${end.getDate()}, ${end.getFullYear()}`
    } else {
      return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${end.getFullYear()}`
    }
  }

  return (
    <Card className="group h-full overflow-hidden border-secondary-200 transition-all hover:shadow-md">
      <CardHeader className="bg-primary-light pb-2 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-primary-light-600">
              {event.name}
            </h3>
          </div>
          <EventTypeBadge variant={getVenueTypeBadgeVariant(event.venueType)}>
            {VENUE_TYPE_NAMES[event.venueType]}
          </EventTypeBadge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pb-2">
        <div className="flex flex-wrap gap-1 -mt-7 pb-1">
          {event.categories.map((cat) => {
            const Icon = CATEGORY_META[cat]?.icon || Flag
            return <IconChip key={cat} icon={Icon} label={cat} />
          })}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            {event.location} {countryEmojis[event.countryCode] || ""}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            {formatDateRange(event.startDateTime, event.endDateTime)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-primary-light-500" />
          <span className="text-secondary-700">
            Temp: {formatTemperature(event?.weatherMetrics, isCelsius)}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {event.domains?.map((domain) => {
            return (
              <span
                key={domain}
                className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-2 py-1 font-normal text-secondary-500 mr-2 mb-1"
                style={{ fontSize: "15px" }}
              >
                #{domain}
              </span>
            )
          })}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-secondary-100 bg-secondary-50 p-3 justify-end">
        {[...event.socials, ...event.links, ...event.communities].map(
          (link) => {
            if (!link || link.length === 0) return null

            return (
              <Button
                key={link}
                variant="outline"
                size="sm"
                className="border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
                onClick={() => {
                  window.open(link, "_blank")
                }}
              >
                <SocialLinkIcon link={link} />
              </Button>
            )
          }
        )}
      </CardFooter>
    </Card>
  )
}
