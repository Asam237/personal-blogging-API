import express from "express";
import { connectToDatabase } from "./starter/database";
import { setupRestEndpoint } from "./utils/setupRestEndPoint";

const app = express();
connectToDatabase();
setupRestEndpoint(app);

export const server = app.listen(3010, () => {
  console.log(`[Server]: connected -> ${3010}`);
});
