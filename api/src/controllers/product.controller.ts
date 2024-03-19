import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";
import jwt, { JwtPayload } from "jsonwebtoken";

export const addProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
    const {
      productName,
      productAdditional,
      productCode,
      productImage,
      productPrice,
      productStocks,
      productCategory,
      productSubCategory,
      productColor,
      productSize,
      productTag,
    } = req.body;

    const productExist = await ProductModel.find({ productCode });

    if (productExist.length) {
      return res.status(401).json({
        message: `${productCode} кодтой бараа өмнө бүртгэгдсэн байна`,
      });
    }

    const product = await ProductModel.create({
      merchId: id,
      productName,
      productAdditional,
      productCode,
      productImage,
      productPrice,
      productStocks,
      productCategory,
      productSubCategory,
      productColor,
      productSize,
      productTag,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.json({ message: "Шинэ бүтээгдэхүүн амжилттай нэмэгдлээ" });
  } catch (err) {
    res.json(err);
  }
};

export const getProducts: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const products = await ProductModel.find({ merchId: id });

    return res.json(products);
  } catch (err) {
    res.json(err);
  }
};
