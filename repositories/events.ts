import supabase from "../supabase"

export const getEvents = async () => {
  const { data, error } = await supabase.from("events").select("*")
  if (error) {
    throw error
  }
  return data
}

export const getEventsWithRelations = async () => {
  const { data, error } = await supabase.from("events").select(
    `*,
      countries (name, official_name, country_code, continents(name)),
      categories:event_category_events(event_categories(name)),
      domains:event_domain_events(event_domains(name))`
  )
  if (error) {
    throw error
  }
  return data
}

export type TEventWithRelationsDTO = Awaited<
  ReturnType<typeof getEventsWithRelations>
>[0]
