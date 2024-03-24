import mongoose, { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  productId: mongoose.Schema.Types.ObjectId,
  stars: {
    star1: Number,
    star2: Number,
    star3: Number,
    star4: Number,
    star5: Number,
  },
  createdAt: Date,
  updatedAt: Date,
});
export const ReviewModel = model("review", reviewSchema);
