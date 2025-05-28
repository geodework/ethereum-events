import { describe, it, expect, beforeEach } from "vitest"
import {
  RegionFilter,
  MonthFilter,
  CityFilter,
  DeadlineSoonFilter,
  applyAllFilters,
} from "./filter-logic"
import { DEFAULT_FILTERS } from "./const"
import type { Event } from "./data"
import type { IFilterState } from "./filter"

const baseEvents: Event[] = [
  {
    id: "1",
    name: "ETHDenver",
    city: "Denver",
    country: "USA",
    countryCode: "US",
    startDate: new Date("2024-02-23"),
    endDate: new Date("2024-03-03"),
    ticketDeadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
    temperature: "35°F / 2°C",
    region: "North America",
    description: "desc",
    website: "https://ethdenver.com",
  },
  {
    id: "2",
    name: "ETHPrague",
    city: "Prague",
    country: "Czech Republic",
    countryCode: "CZ",
    startDate: new Date("2024-05-31"),
    endDate: new Date("2024-06-02"),
    ticketDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    temperature: "68°F / 20°C",
    region: "Europe",
    description: "desc",
    website: "https://ethprague.com",
  },
  {
    id: "3",
    name: "ETHTokyo",
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    startDate: new Date("2024-04-12"),
    endDate: new Date("2024-04-14"),
    ticketDeadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    temperature: "59°F / 15°C",
    region: "Asia",
    description: "desc",
    website: "https://ethtokyo.com",
  },
]

const defaultFilters: IFilterState = {
  region: DEFAULT_FILTERS.region,
  month: DEFAULT_FILTERS.month,
  city: "",
  deadlineSoon: false,
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
    expect(result[0].city).toBe("Tokyo")
  })
})

describe("DeadlineSoonFilter", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = defaultFilters
  })
  it("returns all events if deadlineSoon is false", () => {
    const filter = new DeadlineSoonFilter()
    expect(filter.apply(baseEvents, filters)).toEqual(baseEvents)
  })
  it("filters by deadlineSoon", () => {
    const filter = new DeadlineSoonFilter()
    filters.deadlineSoon = true
    const result = filter.apply(baseEvents, filters)
    // Only events with ticketDeadline within 14 days
    expect(result.some((e) => e.name === "ETHDenver")).toBe(true)
    expect(result.some((e) => e.name === "ETHTokyo")).toBe(true)
    expect(result.some((e) => e.name === "ETHPrague")).toBe(false)
  })
})

describe("applyAllFilters", () => {
  let filters: IFilterState
  beforeEach(() => {
    filters = {
      region: "Asia",
      month: DEFAULT_FILTERS.month,
      city: "tokyo",
      deadlineSoon: true,
    }
  })
  it("applies all filters in sequence", () => {
    const result = applyAllFilters(baseEvents, filters)
    expect(result.length).toBe(1)
    expect(result[0].city).toBe("Tokyo")
    expect(result[0].region).toBe("Asia")
  })
})
