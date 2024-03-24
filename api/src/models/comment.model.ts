import mongoose, { Schema, model } from "mongoose";

const commentSchema = new Schema({
  productID: mongoose.Schema.Types.ObjectId,
  userID: { type: mongoose.Schema.Types.ObjectId, required: false },
  comment: String,
  createdAt: Date,
  updatedAt: Date,
});
export const CommentModel = model("comment", commentSchema);
