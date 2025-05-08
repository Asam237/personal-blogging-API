import { Request, Response } from "express";
import { ArticleInput } from "../types/article.type";
import userService from "../services/user.service";
import articleService from "../services/article.service";

const create = async (req: Request, res: Response) => {
  const { content, title, userId }: ArticleInput = req.body;
  try {
    const user = await userService.findById(parseInt(userId));
    if (!user) return res.status(401).json({ messgae: "User Not Found!" });
    const article = await articleService.create({
      content,
      title,
      userId,
    });
    return res.status(201).json({ article });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const artiles = await articleService.findAll();
    return res.json({ artiles });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const article = await articleService.findOne(parseInt(id));
    if (article === undefined || article === null)
      return res.status(401).json({ message: "Article Not Found!" });
    return res.json({ article });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const article = await articleService.findOne(parseInt(id));
    if (article === undefined || article === null)
      return res.status(401).json({ message: "Article Not Found!" });
    await articleService.deleteOne(parseInt(id));
    return res.json({ message: "Article has been deleted successfully !" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content, title }: ArticleInput = req.body;
  try {
    const article = await articleService.findOne(parseInt(id));
    if (article === undefined || article === null)
      return res.status(401).json({ message: "Article Not Found!" });
    const updateArticle = await articleService.updateOne(parseInt(id), {
      content,
      title,
    });
    return res.json({ article: updateArticle });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default { create, findAll, findOne, deleteOne, updateOne };
