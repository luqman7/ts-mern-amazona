import express from "express"
import asyncHandler from "express-async-handler"
import { sampleProduct } from "../data"
import { ProductModel } from "../models/productModel"

export const seedRouter = express.Router()

seedRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({})
    const createdProucts = await ProductModel.insertMany(sampleProduct)
    res.json({ createdProucts })
  })
)
