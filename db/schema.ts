import { sql } from 'drizzle-orm';
import { serial, pgPolicy, pgTable, text } from 'drizzle-orm/pg-core';

const policies = [
  pgPolicy('policy', {
    as: 'permissive',
    to: ['anon', 'authenticated'],
    for: 'select',
    using: sql`true`,
  }),
];

export const eventsTypes = pgTable(
  'event_types',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
  },
  (t) => policies
);

export type TEventsTypes = typeof eventsTypes.$inferSelect;
