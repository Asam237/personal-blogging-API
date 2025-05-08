import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  username: varchar({ length: 10 }),
  email: varchar().unique(),
  password: varchar(),
  createdAt: timestamp().defaultNow(),
});
