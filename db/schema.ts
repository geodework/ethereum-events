import {
  serial,
  pgTable,
  text,
  integer,
  timestamp,
  pgEnum,
  boolean,
  varchar,
} from "drizzle-orm/pg-core"
import policies from "./policy"

export const eventCategories = pgTable(
  "event_categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (t) => policies
)

export const eventDomains = pgTable(
  "event_domains",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (t) => policies
)

export const continents = pgTable(
  "continents",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
  (t) => policies
)

/**
 * Follows ISO-3166-1 and The UK Foreign, Commonwealth & Development Office (FCDO)
 * @param {string} name - English (or French) short name lower case (title case) defined in The UK Foreign, Commonwealth & Development Office (FCDO)
 * @param {string} officialName - English (or French) short name lower case (title case) defined in ISO 3166-1
 * @param {string} countryCode - ISO 3166-1 alpha-2
 * @see https://en.wikipedia.org/wiki/ISO_3166-1
 * @see https://assets.publishing.service.gov.uk/media/65fd8475f1d3a0001132adf4/FCDO_Geographical_Names_Index_March_2024.csv/preview
 */
export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 80 }).notNull().unique(),
    officialName: varchar("official_name", { length: 80 }).notNull().unique(),
    countryCode: varchar("country_code", { length: 2 }).notNull().unique(),
    continentId: integer("continent_id").references(() => continents.id),
  },
  (t) => policies
)

export const cities = pgTable(
  "cities",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    countryId: integer("country_id").references(() => countries.id),
  },
  (t) => policies
)

export const venueTypeEnum = pgEnum("venue_type_enum", [
  "in_person",
  "virtual",
  "hybrid",
])

export const events = pgTable(
  "events",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    countryId: integer("country_id").references(() => countries.id),
    location: text("location"),
    venueType: venueTypeEnum("venue_type"),
    startDateTime: timestamp("start_date_time"),
    endDateTime: timestamp("end_date_time"),
    hasTimezone: boolean("has_timezone").notNull().default(false),
    links: text("links").array(),
    socials: text("socials").array(),
    communities: text("communities").array(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (t) => policies
)

export const eventCategoryEvents = pgTable(
  "event_category_events",
  {
    id: serial("id").primaryKey(),
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id),
    categoryId: integer("category_id")
      .notNull()
      .references(() => eventCategories.id),
  },
  (t) => policies
)

export const eventDomainEvents = pgTable(
  "event_domain_events",
  {
    id: serial("id").primaryKey(),
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id),
    domainId: integer("domain_id")
      .notNull()
      .references(() => eventDomains.id),
  },
  (t) => policies
)
