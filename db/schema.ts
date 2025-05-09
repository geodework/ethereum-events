import { serial, pgTable, text } from 'drizzle-orm/pg-core';
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
