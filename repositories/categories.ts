import supabase from "../supabase"

export const getCategories = async () => {
  const { data, error } = await supabase.from("event_categories").select("*")
  if (error) {
    throw error
  }
  return data.map((category) => category.name)
}
