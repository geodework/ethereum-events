import supabase from "../supabase"

export const getRegions = async () => {
  const { data, error } = await supabase.from("continents").select("*")
  if (error) {
    throw error
  }
  return data.map((continents) => continents.name)
}
