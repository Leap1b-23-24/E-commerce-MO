import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: String,
  productAdditional: String,
  productCode: String,
  productImage: Object,
  productPrice: Number,
  productStocks: Number,
  productCategory: String,
  productSubCategory: String,
  productColor: Object,
  productSize: Object,
  productTag: Object,
  updatedAt: Date,
  createdAt: Date,
});
export const ProductModel = model("product", productSchema);
