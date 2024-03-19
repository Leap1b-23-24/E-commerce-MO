import { RequestHandler } from "express";
import { ProductModel } from "../models/product.model";

export const addProduct: RequestHandler = async (req, res) => {
  try {
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
