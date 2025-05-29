import { IWeatherAverage } from "@/api/weather/types"
import { TEventDTO } from "./types"
import { TEventWithRelations, TVenueType } from "@/entities"

export function normalizeEventData(events: TEventDTO[]): TEventWithRelations[] {
  return events.map((event) => {
    return {
      id: event.id,
      name: event.name,
      location: event?.location || "",
      region: event.countries?.continents?.name || "",
      country: event.countries?.name || "",
      startDateTime: event.start_date_time
        ? new Date(event.start_date_time)
        : null,
      endDateTime: event.end_date_time ? new Date(event.end_date_time) : null,
      venueType: event.venue_type as TVenueType,
      hasTimezone: event.has_timezone,
      weatherMetrics: event.weather_metrics as unknown as IWeatherAverage,
      links: event.links || [],
      socials: event.socials || [],
      communities: event.communities || [],

      categories: event.categories.map(
        (category) => category.event_categories.name
      ),
      domains: event.domains.map((domain) => domain.event_domains.name),
    }
  })
}
