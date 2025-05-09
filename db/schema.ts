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

export type TEventTypes = typeof eventTypes.$inferSelect;
