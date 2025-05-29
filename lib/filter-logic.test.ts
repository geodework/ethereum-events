import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { vi } from "vitest"
import {
  RegionFilter,
  MonthFilter,
  CityFilter,
  // DeadlineSoonFilter,
  applyAllFilters,
  UpcomingOrOngoingFilter,
  VenueTypeFilter,
  CategoryFilter,
} from "./filter-logic"
import { DEFAULT_FILTERS } from "./const"
import type { IFilterState } from "./filter"
import { TEventWithRelations } from "@/entities"

const baseEvents: TEventWithRelations[] = [
  {
    id: 1,
    name: "ETHDenver",
    location: "Denver, USA",
    region: "North America",
    country: "USA",
    categories: ["Hackathon", "Conference"],
    domains: ["Ethereum", "Web3"],
    venue_type: "in_person",
    start_date_time: new Date("2025-02-23T09:00:00-07:00"),
    end_date_time: new Date("2025-03-03T18:00:00-07:00"),
    links: ["https://ethdenver.com"],
    socials: ["https://twitter.com/ETHDenver"],
    communities: ["https://t.me/ethdenver"],
    has_timezone: true,
    weather_metrics: [{ tempmax: 5, tempmin: -5, temp: 0, humidity: 60 }],
  },
  {
    id: 2,
    name: "ETHPrague",
    location: "Prague, Czech Republic",
    region: "Europe",
    country: "Czech Republic",
    categories: ["Workshop"],
    domains: ["Ethereum"],
    venue_type: "virtual",
    start_date_time: new Date("2025-05-31T10:00:00+02:00"),
    end_date_time: new Date("2025-06-02T18:00:00+02:00"),
    links: ["https://ethprague.com"],
    socials: ["https://twitter.com/ETHPrague"],
    communities: ["https://t.me/ethprague"],
    has_timezone: true,
    weather_metrics: [{ tempmax: 22, tempmin: 12, temp: 17, humidity: 55 }],
  },
  {
    id: 3,
    name: "ETHTokyo",
    location: "Tokyo, Japan",
    region: "Asia",
    country: "Japan",
    categories: ["Hackathon"],
    domains: ["Ethereum"],
    venue_type: "in_person",
    start_date_time: new Date("2025-04-12T09:00:00+09:00"),
    end_date_time: new Date("2025-04-14T18:00:00+09:00"),
    links: ["https://ethtokyo.com"],
    socials: ["https://twitter.com/ETHTokyo"],
    communities: ["https://t.me/ethtokyo"],
    has_timezone: true,
    weather_metrics: [{ tempmax: 18, tempmin: 10, temp: 14, humidity: 70 }],
  },
]

const defaultFilters: IFilterState = {
  region: DEFAULT_FILTERS.region,
  month: DEFAULT_FILTERS.month,
  city: "",
  categories: [DEFAULT_FILTERS.category],
  isUpcomingOrOngoing: false,
  venueType: DEFAULT_FILTERS.venueType,
}

describe("RegionFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if region is default", () => {
    const filter = new RegionFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by region", () => {
    const filter = new RegionFilter()
    filters.region = "Europe"
    const result = filter.apply(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].region).toBe("Europe")
  })
})

describe("MonthFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if month is default", () => {
    const filter = new MonthFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by month", () => {
    const filter = new MonthFilter()
    filters.month = "February"
    const result = filter.apply(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].name).toBe("ETHDenver")
  })
})

describe("CityFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if city is empty", () => {
    const filter = new CityFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by city (case-insensitive)", () => {
    const filter = new CityFilter()
    filters.city = "tokyo"
    const result = filter.apply(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].location).toBe("Tokyo, Japan")
  })
})

describe("CategoryFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if categories is empty", () => {
    const filter = new CategoryFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by category", () => {
    const filter = new CategoryFilter()
    filters.categories = ["Hackathon", "Conference"]
    const result = filter.apply(baseEvents, filters)
    expect(result.length).toBe(2)
    expect(result[0].name).toBe("ETHDenver")
    expect(result[1].name).toBe("ETHTokyo")
  })
})

describe("UpcomingOrOngoingFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it("returns all events if isUpcomingOrOngoing is false", () => {
    filters.isUpcomingOrOngoing = false
    const filter = new UpcomingOrOngoingFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by upcoming or ongoing", () => {
    vi.setSystemTime(new Date("2025-04-15T00:00:00Z"))
    const filter = new UpcomingOrOngoingFilter()
    filters.isUpcomingOrOngoing = true
    const result = filter.apply(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].name).toBe("ETHPrague")
  })

  it("filters by ongoing", () => {
    const currentTime = new Date("2025-04-01T00:00:00Z")
    vi.setSystemTime(currentTime)
    const filter = new UpcomingOrOngoingFilter()
    filters.isUpcomingOrOngoing = true

    const result = filter.apply(
      [
        {
          ...baseEvents[0],
          end_date_time: currentTime,
        },
      ],
      filters
    )
    expect(result.length).toBe(1)
  })

  it("filters by finished by 1 second", () => {
    vi.setSystemTime(new Date("2025-04-01T00:00:01Z"))
    const filter = new UpcomingOrOngoingFilter()
    filters.isUpcomingOrOngoing = true

    const result = filter.apply(
      [
        {
          ...baseEvents[0],
          end_date_time: new Date("2025-04-01T00:00:00Z"),
        },
      ],
      filters
    )
    expect(result.length).toBe(0)
  })
})

describe("VenueTypeFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if venueType is default", () => {
    const filter = new VenueTypeFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by venueType", () => {
    const type = "in_person"
    const filter = new VenueTypeFilter()
    filters.venueType = type
    const result = filter.apply(
      [
        {
          ...baseEvents[0],
          venue_type: type,
        },
        {
          ...baseEvents[1],
          venue_type: "virtual",
        },
      ],
      filters
    )
    expect(result.length).toBe(1)
    expect(result[0].venue_type).toBe(type)
  })
})

describe("applyAllFilters", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = {
      region: "Asia",
      month: DEFAULT_FILTERS.month,
      city: "tokyo",
      isUpcomingOrOngoing: false,
      venueType: "in_person",
      categories: [DEFAULT_FILTERS.category],
    }
  })
  it("applies all filters in sequence", () => {
    const result = applyAllFilters(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].location).toBe("Tokyo, Japan")
    expect(result[0].region).toBe("Asia")
  })
})
