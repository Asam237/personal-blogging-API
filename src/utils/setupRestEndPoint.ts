import express, { Application } from "express";
import { UserRouter } from "../routes/user.route";
import { ArtilceRouter } from "../routes/article.route";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "../swagger.json";

export const setupRestEndpoint = (app: Application) => {
  app.use(express.json());
  app.use(UserRouter());
  app.use(ArtilceRouter());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};
