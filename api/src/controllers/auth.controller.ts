import { RequestHandler } from "express";

import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const { userName, email, phoneNumber } = req.body;

    const userExist = await UserModel.find({ email });

    if (userExist.length) {
      return res.status(401).json({
        message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
      });
    }

    const user = await UserModel.create({
      email,
      userName,
      phoneNumber,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (err) {
    res.json(err);
  }
};
