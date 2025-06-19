import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';

// 确保环境变量已加载
config({ path: '.env' });

const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle({ client: sql });
