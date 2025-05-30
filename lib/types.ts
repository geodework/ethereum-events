import { TEventWithRelationsDTO } from "@/repositories/events"

export type TEventOnServiceDTO = TEventWithRelationsDTO & {
  start_date_time: string
  end_date_time: string
  countries: {
    name: string
    official_name: string
    country_code: string
    continents: { name: string } | null
  } | null
  categories: {
    event_categories: {
      name: string
    }
  }[]
  domains: {
    event_domains: {
      name: string
    }
  }[]
}
