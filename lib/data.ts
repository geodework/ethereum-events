import { TEventWithRelations } from "@/entities"
import { DEFAULT_FILTERS } from "@/lib/filter"
import { getCategories } from "@/repositories/categories"
import { getDomains } from "@/repositories/domains"
import { getEventsWithRelations } from "@/repositories/events"
import { getRegions } from "@/repositories/regions"
import { normalizeEventData } from "./normalizeEventData"

const eventDomains = await getDomains()
export const domains = [DEFAULT_FILTERS.domain, ...eventDomains]

const eventCategories = await getCategories()
export const categories = [DEFAULT_FILTERS.category, ...eventCategories]

const eventRegions = await getRegions()
export const regions = [DEFAULT_FILTERS.region, ...eventRegions]

// Sample data for the events
const allEvents = await getEventsWithRelations()
const normalizedEvents = normalizeEventData(allEvents)
export const events = normalizedEvents
