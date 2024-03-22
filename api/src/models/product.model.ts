import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  merchId: mongoose.Schema.Types.ObjectId,
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
  productReactionCount: { type: Number, required: false },
  productSoldQty: { type: Number, required: false },
  salePercent: { type: Number, required: false },
  updatedAt: Date,
  createdAt: Date,
});
export const ProductModel = model("product", productSchema);
