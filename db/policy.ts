import { sql } from 'drizzle-orm';
import { pgPolicy } from 'drizzle-orm/pg-core';

// Note: There is a bug in supabase that doesn't allow to use sql`true`.
// I manually added the policy to enable read access to all users in Supabase dashboard.
const policies = [
  pgPolicy('Enable read access to all users', {
    as: 'permissive',
    to: ['public'],
    for: 'select',
    using: sql`true`,
  }),
];

export default policies;
