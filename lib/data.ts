import { DEFAULT_FILTERS } from "./const"

export type Event = {
  id: string
  name: string
  city: string
  country: string
  countryCode: string
  startDate: Date
  endDate: Date
  ticketDeadline: Date
  temperature: string
  region:
    | "Asia"
    | "Europe"
    | "North America"
    | "South America"
    | "Africa"
    | "Oceania"
  description?: string
  website?: string
}

// Sample data for the events
export const events: Event[] = [
  {
    id: "1",
    name: "ETHDenver",
    city: "Denver",
    country: "USA",
    countryCode: "US",
    startDate: new Date("2024-02-23"),
    endDate: new Date("2024-03-03"),
    ticketDeadline: new Date("2024-01-15"),
    temperature: "35°F / 2°C",
    region: "North America",
    description: "The world's largest Web3 BUIDLathon and community gathering",
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
    ticketDeadline: new Date("2024-05-01"),
    temperature: "68°F / 20°C",
    region: "Europe",
    description: "A hackathon and conference focused on Ethereum and Web3",
    website: "https://ethprague.com",
  },
  {
    id: "3",
    name: "ETHBarcelona",
    city: "Barcelona",
    country: "Spain",
    countryCode: "ES",
    startDate: new Date("2024-07-12"),
    endDate: new Date("2024-07-14"),
    ticketDeadline: new Date("2024-06-15"),
    temperature: "82°F / 28°C",
    region: "Europe",
    description: "A summer Ethereum event in the heart of Barcelona",
    website: "https://ethbarcelona.com",
  },
  {
    id: "4",
    name: "ETHSingapore",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    startDate: new Date("2024-09-05"),
    endDate: new Date("2024-09-08"),
    ticketDeadline: new Date("2024-08-01"),
    temperature: "88°F / 31°C",
    region: "Asia",
    description: "Asia's premier Ethereum developer conference",
    website: "https://ethsingapore.com",
  },
  {
    id: "5",
    name: "Devcon",
    city: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    startDate: new Date("2024-11-12"),
    endDate: new Date("2024-11-15"),
    ticketDeadline: new Date("2024-09-30"),
    temperature: "86°F / 30°C",
    region: "Asia",
    description: "The annual Ethereum developer conference",
    website: "https://devcon.org",
  },
  {
    id: "6",
    name: "ETHLisbon",
    city: "Lisbon",
    country: "Portugal",
    countryCode: "PT",
    startDate: new Date("2024-10-18"),
    endDate: new Date("2024-10-20"),
    ticketDeadline: new Date("2024-09-15"),
    temperature: "70°F / 21°C",
    region: "Europe",
    description: "A hackathon in the beautiful city of Lisbon",
    website: "https://ethlisbon.org",
  },
  {
    id: "7",
    name: "ETHTokyo",
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    startDate: new Date("2024-04-12"),
    endDate: new Date("2024-04-14"),
    ticketDeadline: new Date("2024-03-15"),
    temperature: "59°F / 15°C",
    region: "Asia",
    description: "Japan's largest Ethereum hackathon",
    website: "https://ethtokyo.com",
  },
  {
    id: "8",
    name: "ETHBerlin",
    city: "Berlin",
    country: "Germany",
    countryCode: "DE",
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    ticketDeadline: new Date("2024-07-20"),
    temperature: "75°F / 24°C",
    region: "Europe",
    description: "A community-driven hackathon in Berlin",
    website: "https://ethberlin.org",
  },
  {
    id: "9",
    name: "ETHNewYork",
    city: "New York",
    country: "USA",
    countryCode: "US",
    startDate: new Date("2024-05-10"),
    endDate: new Date("2024-05-12"),
    ticketDeadline: new Date("2024-04-10"),
    temperature: "68°F / 20°C",
    region: "North America",
    description: "A hackathon in the heart of New York City",
    website: "https://ethnewyork.com",
  },
  {
    id: "10",
    name: "ETHRio",
    city: "Rio de Janeiro",
    country: "Brazil",
    countryCode: "BR",
    startDate: new Date("2024-03-14"),
    endDate: new Date("2024-03-17"),
    ticketDeadline: new Date("2024-02-15"),
    temperature: "86°F / 30°C",
    region: "South America",
    description: "Brazil's premier Ethereum event",
    website: "https://ethrio.org",
  },
]

export const regions = [
  DEFAULT_FILTERS.region,
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Africa",
  "Oceania",
]
