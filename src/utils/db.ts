import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import {
  DATABASE,
  HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from "../starter/config";

export const pool: pg.Pool = new pg.Pool({
  connectionString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${HOST}:${POSTGRES_PORT}/${DATABASE}`,
});

export const db = drizzle(pool);
