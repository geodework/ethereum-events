import { db } from "../index"
import fs from "fs"
import path from "path"
import { eventCategoryEvents, eventDomainEvents, events } from "../schema"

const main = async () => {
  const eventsJsonPath = path.join(
    __dirname,
    "../output/events-with-api-data.json"
  )
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

  console.log("events processing starts...")
  const eventsPayload = eventsData.map((e) => {
    const { categories, domains, ...rest } = e

    return {
      ...rest,
      startDateTime: rest.startDateTime ? new Date(rest.startDateTime) : null,
      endDateTime: rest.endDateTime ? new Date(rest.endDateTime) : null,
    }
  })
  console.log("events payload created")
  const eventsResult = await db.insert(events).values(eventsPayload).returning()
  console.log("events inserted", eventsResult)

  if (eventsResult.length !== eventsPayload.length) {
    throw new Error("Failed to insert events")
  }

  const eventsToCategoryPayload: { eventId: number; categoryId: number }[] = []
  const eventsToDomainPayload: { eventId: number; domainId: number }[] = []

  console.log("bridging data creating...")
  eventsResult.forEach((result: { id: number }, idx) => {
    eventsData[idx].categories.forEach((categoryId: number) => {
      eventsToCategoryPayload.push({
        eventId: result.id,
        categoryId: categoryId,
      })
    })
    eventsData[idx].domains.forEach((domainId: number) => {
      eventsToDomainPayload.push({
        eventId: result.id,
        domainId: domainId,
      })
    })
  })
  console.log("bridging data created")
  await db.insert(eventCategoryEvents).values(eventsToCategoryPayload)
  console.log("eventCategoryEvents inserted")
  await db.insert(eventDomainEvents).values(eventsToDomainPayload)
  console.log("eventDomainEvents inserted")

  console.log("Database updated")
}

main().catch(console.error)
