import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../models/schema';

const pool = new Pool({
	connectionString: process.env.DBURL,
});

export const db = drizzle(pool, { schema });
