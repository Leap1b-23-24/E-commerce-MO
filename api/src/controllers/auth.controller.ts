import { RequestHandler } from "express";

import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const {
      userName,
      email,
      merchName,
      city,
      district,
      khoroo,
      experience,
      merchType,
      password,
    } = req.body;

    const userExist = await UserModel.find({ email });

    if (userExist.length) {
      return res.status(401).json({
        message: `${email} и-мэйлтэй хэрэглэгч өмнө бүртгэгдсэн байна`,
      });
    }

    const user = await UserModel.create({
      userName,
      email,
      merchName,
      address: { city, district, khoroo },
      experience,
      merchType,
      password,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ хэрэглэгч амжилттай үүслээ" });
  } catch (err) {
    res.json(err);
  }
};
