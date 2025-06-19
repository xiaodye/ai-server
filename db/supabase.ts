import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';

config({ path: '.env' });

// Disable prefetch as it is not supported for "Transaction" pool mode

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const client = postgres(process.env.SUPABASE_DATABASE_URL!, { prepare: false });

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(client);
