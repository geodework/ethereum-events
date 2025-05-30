import supabase from "../supabase"

export const getCategories = async () => {
  const { data, error } = await supabase.from("event_categories").select("*")
  if (error) {
    throw error
  }
  return data.map((event_categories) => event_categories.name)
}
