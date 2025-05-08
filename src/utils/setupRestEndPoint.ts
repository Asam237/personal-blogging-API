import express, { Application } from "express";
import { UserRouter } from "../routes/user.route";

export const setupRestEndpoint = (app: Application) => {
  app.use(express.json());
  app.use(UserRouter());
};
