import express from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "./controllers.mjs";
export const routerMongo = express.Router();

routerMongo.post("/products", createProduct);
routerMongo.get("/products", getProduct);
routerMongo.put("/products/:id", updateProduct);
routerMongo.delete("/products/:id", deleteProduct);
