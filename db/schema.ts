import {
  serial,
  pgTable,
  text,
  integer,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';
import policies from './policy';

export const eventTypes = pgTable(
  'event_types',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export const eventCategories = pgTable(
  'event_categories',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export const eventDomains = pgTable(
  'event_domains',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export const continents = pgTable(
  'continents',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export const countries = pgTable(
  'countries',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    continentId: integer('continent_id').references(() => continents.id),
  },
  (t) => policies
);

export const cities = pgTable(
  'cities',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    countryId: integer('country_id').references(() => countries.id),
  },
  (t) => policies
);

export const venueTypeEnum = pgEnum('venue_type_enum', [
  'in_person',
  'virtual',
  'hybrid',
]);

export const events = pgTable(
  'events',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    cityId: integer('city_id').references(() => cities.id),
    location: text('location'),
    venueType: venueTypeEnum('venue_type'),
    startDate: timestamp('start_date').notNull(),
    endDate: timestamp('end_date').notNull(),
    links: text('links').array(),
    socials: text('socials').array(),
    contacts: text('contacts').array(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => policies
);

export const eventCategoryEvents = pgTable(
  'event_category_events',
  {
    id: serial('id').primaryKey(),
    eventId: integer('event_id')
      .notNull()
      .references(() => events.id),
    categoryId: integer('category_id')
      .notNull()
      .references(() => eventCategories.id),
  },
  (t) => policies
);

export const eventDomainEvents = pgTable(
  'event_domain_events',
  {
    id: serial('id').primaryKey(),
    eventId: integer('event_id')
      .notNull()
      .references(() => events.id),
    domainId: integer('domain_id')
      .notNull()
      .references(() => eventDomains.id),
  },
  (t) => policies
);
