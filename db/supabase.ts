import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';

config({ path: '.env' });

// Disable prefetch as it is not supported for "Transaction" pool mode

const client = postgres(process.env.SUPABASE_DATABASE_URL!, { prepare: false });

export const db = drizzle(client);
