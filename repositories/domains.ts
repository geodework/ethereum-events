import supabase from "../supabase"

export const getDomains = async () => {
  const { data, error } = await supabase.from("event_domains").select("*")
  if (error) {
    throw error
  }
  return data.map((event_domains) => event_domains.name)
}
