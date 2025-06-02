import { IWeatherAverage } from "@/api/weather/types"
import { TEventOnServiceDTO } from "./types"
import { TEventWithRelations, TVenueType } from "@/entities"
import { TEventWithRelationsDTO } from "@/repositories/events"

export function normalizeEventData(
  events: TEventOnServiceDTO[]
): TEventWithRelations[] {
  return events.map((event) => {
    return {
      id: event.id,
      name: event.name,
      location: event?.location || "",
      region: event.countries?.continents?.name || "",
      country: event.countries?.name || "",
      startDateTime: new Date(event.start_date_time),
      endDateTime: new Date(event.end_date_time),
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

function hasDateTimes(
  event: TEventWithRelationsDTO
): event is TEventOnServiceDTO {
  return Boolean(event.start_date_time && event.end_date_time)
}

/**
 * Convert types defiend for database concern to be for service layer TEventOnServiceDTO.
 */
export function filterEventsDTO(
  events: TEventWithRelationsDTO[]
): TEventOnServiceDTO[] {
  return events.filter(hasDateTimes)
}
