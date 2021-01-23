import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @Desc     Fetch all products
// @Route    GET /api/products
// @Access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @Desc     Fetch a single product
// @Route    GET /api/products/:id
// @Access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Product Not Found`);
  }
});

export { getProducts, getProductById };
