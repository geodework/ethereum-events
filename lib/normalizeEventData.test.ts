import { describe, expect, it } from "vitest"
import { normalizeEventData } from "./normalizeEventData"

const mockEvents = [
  {
    id: 1,
    name: "FarCon",
    country_id: 1,
    location: "NYC, USA",
    venue_type: "in_person" as const,
    start_date_time: "2025-05-01T00:00:00",
    end_date_time: "2025-05-04T00:00:00",
    links: ["https://farcon.nyc/"],
    socials: ["https://warpcast.com/~/channel/farcon-nyc"],
    communities: [],
    created_at: "2025-05-26T12:03:18.222439",
    updated_at: "2025-05-26T12:03:18.222439",
    has_timezone: false,
    weather_metrics: {
      temp: 19.5,
      tempmax: 29.4,
      tempmin: 11.2,
      humidity: 59.9,
    },
    countries: {
      name: "United States",
      continents: {
        name: "North America",
      },
      country_code: "US",
      official_name: "United States of America",
    },
    categories: [
      {
        event_categories: {
          name: "Hackathon",
        },
      },
      {
        event_categories: {
          name: "Summit",
        },
      },
    ],
    domains: [
      {
        event_domains: {
          name: "Web3 General",
        },
      },
    ],
  },
]

describe("normalizeEventData", () => {
  it("should normalize event data", () => {
    const events = normalizeEventData(mockEvents)

    expect(events).toEqual([
      {
        id: 1,
        name: "FarCon",
        location: "NYC, USA",
        region: "North America",
        country: "United States",
        categories: ["Hackathon", "Summit"],
        domains: ["Web3 General"],
        venueType: "in_person",
        startDateTime: new Date("2025-05-01T00:00:00"),
        endDateTime: new Date("2025-05-04T00:00:00"),
        links: ["https://farcon.nyc/"],
        socials: ["https://warpcast.com/~/channel/farcon-nyc"],
        communities: [],
        hasTimezone: false,
        weatherMetrics: {
          temp: 19.5,
          tempmax: 29.4,
          tempmin: 11.2,
          humidity: 59.9,
        },
      },
    ])
  })
})
