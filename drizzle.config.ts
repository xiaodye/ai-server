import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.SUPABASE_DATABASE_URL!,
  },
});
