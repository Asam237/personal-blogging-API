import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../utils/db";

export const connectToDatabase = async () => {
  try {
    pool.on("connect", () => {
      console.log(`[database]: connected`);
    });
    pool.on("error", (error) => {
      console.log(`[database]: error -> ${error}`);
    });
    const client = await pool.connect();
    client.release();
    return drizzle(pool);
  } catch (error) {
    console.log(`Error -> ${error}`);
  }
};
