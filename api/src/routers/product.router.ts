import { Router } from "express";
import { addProduct } from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/addProduct", addProduct);
export default productRouter;
