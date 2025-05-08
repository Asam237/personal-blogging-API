import { Router } from "express";
import userController from "../controllers/user.controller";

export const UserRouter = () => {
  const router = Router();
  const prefix: string = "/users";
  router.post(`${prefix}/register`, userController.register);
  router.post(`${prefix}/login`, userController.login);
  return router;
};
