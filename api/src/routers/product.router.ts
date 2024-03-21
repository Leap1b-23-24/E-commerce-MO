import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProducts,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/addProduct", addProduct)
  .get("/getProducts", getProducts)
  .post("/deleteProduct", deleteProduct)
  .get("/getAllProducts", getAllProducts);
export default productRouter;
