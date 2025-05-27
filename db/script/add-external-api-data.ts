import fs from "fs"
import path from "path"
import { WeatherClient } from "../../api"

const main = async () => {
  const eventsJsonPath = path.join(__dirname, "../output/events.json")
  let eventsData: any[] = []
  try {
    const fileContent = fs.readFileSync(eventsJsonPath, "utf-8")
    eventsData = JSON.parse(fileContent)
  } catch (err) {
    throw new Error(
      `Failed to read or parse events.json at ${eventsJsonPath}: ${err}`
    )
  }

  if (eventsData?.length === 0) {
    throw new Error(
      "No events data found in output/events.json. Generate it first."
    )
  }
  const eventsPayload = []

  console.log("events processing starts...")

  for (const event of eventsData) {
    // To add weather information via API based on the location and the dates.
    if (event.venueType === "virtual" || !event.location) {
      eventsPayload.push(event)
      continue
    }

    const startDateTime = event.startDateTime
      ? new Date(event.startDateTime).toISOString().split("T")[0]
      : null
    const endDateTime = event.endDateTime
      ? new Date(event.endDateTime).toISOString().split("T")[0]
      : null
    const location = event.location.replace(/ /g, "")
    console.log(`api request to ${location}/${startDateTime}/${endDateTime}`)

    try {
      const weatherClient = WeatherClient.getInstance()
      const weatherData = await weatherClient.getWeatherData(
        location,
        startDateTime!,
        endDateTime!
      )
      if (weatherData.days.length < 1) {
        throw new Error(
          "Weather data is not invalid. It should be not be empty"
        )
      }
      const weather = weatherClient.calculateWeatherAverage(weatherData)

      eventsPayload.push({
        ...event,
        weather_metrics: weather,
      })
    } catch (error) {
      console.error(error)
      eventsPayload.push(event)
    }

    // Add delay between API calls
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  console.log("events payload created")

  fs.writeFileSync(
    path.join(__dirname, "../output/events-with-api-data.json"),
    JSON.stringify(eventsPayload, null, 2)
  )

  console.log("Database updated")
}

main().catch(console.error)
