import { sql } from 'drizzle-orm';
import { pgPolicy } from 'drizzle-orm/pg-core';

const policies = [
  pgPolicy('policy', {
    as: 'permissive',
    to: ['public'],
    for: 'select',
    using: sql`true`,
  }),
];

export default policies;
