import { eq } from "drizzle-orm";
import { users } from "../schemas/user.schema";
import { UserInput } from "../types/user.type";
import { db } from "../utils/db";

/**
 *
 * @param input - User Input
 * @returns user created
 */
const register = async (input: UserInput) => {
  const resp = await db.insert(users).values(input).returning();
  return resp.length > 0 ? resp[0] : null;
};

/**
 *
 * @param username - string
 * @returns user
 */
const findByUsername = async (username: string) => {
  const resp = await db
    .select()
    .from(users)
    .where(eq(users.username, username));
  return resp.length > 0 ? resp[0] : null;
};

const findById = async (id: number) => {
  const resp = await db.select().from(users).where(eq(users.id, id));
  return resp.length > 0 ? resp[0] : null;
};
export default { register, findByUsername, findById };
