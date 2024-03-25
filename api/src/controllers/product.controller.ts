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
      editId,
    } = req.body;

    if (editId) {
      const editProd = await ProductModel.findOneAndUpdate(
        { _id: editId },
        {
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
        }
      );
      return res.json({ message: "Бүтээгдэхүүн амжилттай шинэчлэгдлээ" });
    }

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
      productSoldQty: 0,
      salePercent: 0,
      productReactionCount: 0,
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
      return res.status(401).json("Unauthorized");
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const products = await ProductModel.find({ merchId: id });

    return res.json(products);
  } catch (err) {
    res.json(err);
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
    const { productId } = req.body;

    const productExist = await ProductModel.findOne({ _id: productId });

    if (!productExist) {
      return res.status(401).json({
        message: `Устгах бараа олдсонгүй`,
      });
    }

    const product = await ProductModel.findByIdAndDelete(productId);

    return res.json({ message: "Бүтээгдэхүүн устгагдлаа" });
  } catch (err) {
    res.json(err);
  }
};
export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({});

    return res.json(allProducts);
  } catch (err) {
    res.json(err);
  }
};

export const updateReaction: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { productId } = req.body;

    if (!authorization) {
      return res.status(401).json({
        message: "Бүртгэлгүй хэрэглэгч байна. Та бүртгүүлээд дахин оролдоно уу",
      });
    }
    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const editProduct = await ProductModel.findOne({
      merchId: id,
      _id: productId,
    });

    if (!editProduct) {
      return res.status(401).json({
        message: "Шинэчлэх бараа олдсонгүй.",
      });
    }
    const reaction = editProduct.productReactionCount;
    // return res.json(reaction);
    if (reaction || reaction == 0) {
      const editProd = await ProductModel.findOneAndUpdate(
        { _id: productId },
        {
          productReactionCount: reaction + 1,
          updatedAt: new Date(),
        }
      );
    }
    return res.json({ message: "Success" });
  } catch (err) {
    res.json(err);
  }
};

export const addReview: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { productId, star } = req.body;

    let userId = null;

    if (authorization) {
      const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;
      userId = id;
    }

    const editProduct = await ProductModel.findOne({
      _id: productId,
    });

    if (!editProduct) {
      return res.status(401).json({
        message: "Шинэчлэх бараа олдсонгүй.",
      });
    }

    // const edit=await ProductModel.findOneAndUpdate({_id:productId},{stars.[2]:5})

    return res.json({ message: "Success" });
  } catch (err) {
    res.json(err);
  }
};
