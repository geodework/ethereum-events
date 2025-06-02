import { TVenueType } from "@/entities"
import {
  Mic2,
  Terminal,
  Users,
  Flag,
  MapPin,
  Wrench,
  Layers,
} from "lucide-react"

export interface IFilterState {
  region: string
  month: string
  city: string
  isUpcomingOrOngoing: boolean
  venueType: TVenueType
  categories: string[]
  domains: string[]
}

export const DEFAULT_FILTERS = {
  region: "All Regions",
  month: "All Months",
  domain: "All Domains",
  category: "All Categories",
  venueType: "All Venue Types",
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const VENUE_TYPE_NAMES: {
  [key in TVenueType]: string
} = {
  in_person: "Onsite",
  virtual: "Online",
  hybrid: "Hybrid",
}

export const CATEGORY_META: Record<
  string,
  { icon: React.ElementType; color: string }
> = {
  Conference: { icon: Mic2, color: "bg-cyan-100" }, // 🎤 keynote talks
  Hackathon: { icon: Terminal, color: "bg-pink-100" }, // 💻 code & CLI
  Meetup: { icon: Users, color: "bg-green-100" }, // 👥 community gathering
  Summit: { icon: Flag, color: "bg-yellow-100" }, // 🏁 top-level gathering
  "Popup Village/City": { icon: MapPin, color: "bg-purple-100" }, // 📍 pop-up location
  Workshop: { icon: Wrench, color: "bg-orange-100" }, // 🛠 hands-on session
  "Blockchain Week": { icon: Layers, color: "bg-blue-100" }, // 📚 stacked blocks
}

export type TCategory = keyof typeof CATEGORY_META
