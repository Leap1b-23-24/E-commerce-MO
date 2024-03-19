import { Router } from "express";
import { addProduct, getProducts } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/addProduct", addProduct).get("/getProducts", getProducts);
export default productRouter;
