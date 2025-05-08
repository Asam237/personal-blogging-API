import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./user.schema";

export const articles = pgTable("articles", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  title: varchar(),
  content: varchar(),
  userId: integer("user_id").references(() => users.id),
  createdAt: timestamp().defaultNow(),
});
