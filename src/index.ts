import express from "express";

const app = express();

export const server = app.listen(3010, () => {
  console.log(`[Server]: connected -> ${3010}`);
});
