import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});
export const ProductModel = model("product", categorySchema);
