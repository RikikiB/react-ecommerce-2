import express from "express";
import * as db from "./db.js";

function makeServer() {
  const app = express();

  app.get("/api/products", (req, res) => {
    res.status(200).json(db.listProducts());
  });
  return app;
}
export { makeServer };
export default makeServer;
