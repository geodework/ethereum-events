import { DEFAULT_FILTERS } from "@/lib/filter"
import { getCategories } from "@/repositories/categories"
import { getDomains } from "@/repositories/domains"
import {
  getEventsWithRelations,
  TEventWithRelationsDTO,
} from "@/repositories/events"
import { getRegions } from "@/repositories/regions"
import { filterEventsDTO, normalizeEventData } from "./eventDataTransformers"

const eventDomains = await getDomains()
export const domains = [DEFAULT_FILTERS.domain, ...eventDomains]

const eventCategories = await getCategories()
export const categories = [DEFAULT_FILTERS.category, ...eventCategories]

const eventRegions = await getRegions()
export const regions = [DEFAULT_FILTERS.region, ...eventRegions]

const allEvents: TEventWithRelationsDTO[] = await getEventsWithRelations()

const filteredEvents = filterEventsDTO(allEvents)

const normalizedEvents = normalizeEventData(filteredEvents)
export const events = normalizedEvents
