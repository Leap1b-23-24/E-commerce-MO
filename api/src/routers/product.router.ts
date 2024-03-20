import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/addProduct", addProduct)
  .get("/getProducts", getProducts)
  .post("/deleteProduct", deleteProduct);
export default productRouter;
