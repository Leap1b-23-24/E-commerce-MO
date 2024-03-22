import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProducts,
  updateReaction,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter
  .post("/addProduct", addProduct)
  .get("/getProducts", getProducts)
  .post("/deleteProduct", deleteProduct)
  .get("/getAllProducts", getAllProducts)
  .post("/updateReaction", updateReaction);
export default productRouter;
