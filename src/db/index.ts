import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// 确保环境变量已加载
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({ client: pool });
