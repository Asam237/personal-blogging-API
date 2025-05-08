import { eq } from "drizzle-orm";
import { articles } from "../schemas/article.schema";
import { ArticleInput } from "../types/article.type";
import { db } from "../utils/db";

const create = async (input: ArticleInput) => {
  const resp = await db.insert(articles).values(input).returning();
  return resp.length > 0 ? resp[0] : null;
};

const findAll = async () => {
  return await db.select().from(articles);
};

const findOne = async (id: number) => {
  const resp = await db.select().from(articles).where(eq(articles.id, id));
  return resp.length > 0 ? resp[0] : null;
};

const deleteOne = async (id: number) => {
  return await db.delete(articles).where(eq(articles.id, id));
};

const updateOne = async (id: number, input: ArticleInput) => {
  const resp = await db
    .update(articles)
    .set(input)
    .where(eq(articles.id, id))
    .returning();
  return resp.length > 0 ? resp[0] : null;
};

export default { create, findAll, findOne, deleteOne, updateOne };
