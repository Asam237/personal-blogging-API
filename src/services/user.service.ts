import { eq } from "drizzle-orm";
import { users } from "../schemas/user.schema";
import { UserInput } from "../types/user";
import { db } from "../utils/db";

const register = async (input: UserInput) => {
  const resp = await db.insert(users).values(input).returning();
  return resp.length > 0 ? resp[0] : null;
};

const findByUsername = async (username: string) => {
  const resp = await db
    .select()
    .from(users)
    .where(eq(users.username, username));
  return resp.length > 0 ? resp[0] : null;
};

export default { register, findByUsername };
