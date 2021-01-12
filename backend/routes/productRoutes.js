import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @Desc     Fetch all products
// @Route    GET /api/products
// @Access   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @Desc     Fetch a single product
// @Route    GET /api/products/:id
// @Access   Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(`Product Not Found`);
    }
  })
);

export default router;
