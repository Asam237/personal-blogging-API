import express, { Application } from "express";

export const setupRestEndpoint = (app: Application) => {
  app.use(express.json());
};
