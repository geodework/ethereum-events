import { serial, pgTable, text } from 'drizzle-orm/pg-core';
import policies from './policy';

export const eventsTypes = pgTable(
  'event_types',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export type TEventsTypes = typeof eventsTypes.$inferSelect;
