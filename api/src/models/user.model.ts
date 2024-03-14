import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: String,
  email: Number,
  phoneNumber: String,
  password: String,
  address: String,
  zipCode: Number,
  cartId: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model("user", userSchema);
