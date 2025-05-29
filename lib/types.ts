import { Database } from "@/supabase/database.types"

export type TEventDTO = Database["public"]["Tables"]["events"]["Row"] & {
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
