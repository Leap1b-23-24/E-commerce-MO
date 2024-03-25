import { Router } from "express";
import { addComment } from "../controllers/comment.controller";

const commentRouter = Router();
commentRouter.post("/addComment", addComment);

export default commentRouter;
