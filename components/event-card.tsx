import React from "react"
import { Calendar, Flag, MapPin, Thermometer } from "lucide-react"
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
    <Card className="web3-card group h-full flex flex-col overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5 pb-4 py-6 relative">
        <div className="absolute top-4 right-4 z-10">
          <EventTypeBadge variant={getVenueTypeBadgeVariant(event.venueType)}>
            {VENUE_TYPE_NAMES[event.venueType]}
          </EventTypeBadge>
        </div>
        <div className="pr-20">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
            {event.name}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6 pb-4 flex-1">
        {/* Category chips */}
        <div className="flex flex-wrap gap-2 -mt-2">
          {event.categories.map((cat) => {
            const Icon = CATEGORY_META[cat]?.icon || Flag
            return (
              <div 
                key={cat} 
                className="web3-chip-primary text-xs"
              >
                <Icon className="h-3 w-3 mr-1" />
                {cat}
              </div>
            )
          })}
        </div>

        {/* Event details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
              <MapPin className="h-3 w-3 text-primary" />
            </div>
            <span className="text-secondary-700 font-medium">
              {event.location} {countryEmojis[event.countryCode] || ""}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10">
              <Calendar className="h-3 w-3 text-accent-foreground" />
            </div>
            <span className="text-secondary-700 font-medium">
              {formatDateRange(event.startDateTime, event.endDateTime)}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-light">
              <Thermometer className="h-3 w-3 text-purple-accent" />
            </div>
            <span className="text-secondary-700 font-medium">
              {formatTemperature(event?.weatherMetrics, isCelsius)}
            </span>
          </div>
        </div>

        {/* Domain tags */}
        {event.domains && event.domains.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {event.domains.map((domain) => (
              <span
                key={domain}
                className="web3-chip-secondary text-xs"
              >
                #{domain}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-secondary-100 bg-gradient-to-r from-secondary-50 to-secondary-50/50 p-4 justify-end min-h-[3.5rem] items-center">
        {[...event.socials, ...event.links, ...event.communities].map(
          (link) => {
            if (!link || link.length === 0) return null

            return (
              <Button
                key={link}
                variant="outline"
                size="sm"
                className="web3-button-ghost border-secondary-200 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all duration-200"
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
