import { Router } from "express";
import articleController from "../controllers/article.controller";

export const ArtilceRouter = () => {
  const prefix: string = "/articles";
  const router = Router();
  router.post(`${prefix}`, articleController.create);
  router.get(`${prefix}`, articleController.findAll);
  router.get(`${prefix}/:id`, articleController.findOne);
  router.delete(`${prefix}/:id`, articleController.deleteOne);
  router.put(`${prefix}/:id`, articleController.updateOne);
  return router;
};
