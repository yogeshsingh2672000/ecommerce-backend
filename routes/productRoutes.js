import express from "express";
const router = express.Router();
import {
  inserProduct,
  fetchProduct,
  updateProduct,
  deleteProduct,
} from "../utils/product.js";

router.get("/hi", (req, res) => {
  res.send("product apis working");
});

router.post("/create", async (req, res) => {
  const { name, img, desc } = req.body;
  try {
    await inserProduct(name, img, desc);
    res.status(200).json({ status: 1 });
  } catch (err) {
    console.log("error in creating a product", err);
    res.status(500).json({ status: 1, error: "error in creating a product" });
  }
});

// fetch all
router.get("/all", async (req, res) => {
  try {
    const products = await fetchProduct();
    const serializedData = JSON.stringify(products);
    res.status(200).send(serializedData);
  } catch (err) {
    console.error("Failed to fetch all products", err);
    res.status(500).json({ status: 0, error: "Failed to fetch all products" });
  }
});

// fetch one
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await fetchProduct(id && id);
    const serializedData = JSON.stringify(products);
    res.status(200).send(serializedData);
  } catch (err) {
    console.error(`Failed to fetch id:${id} products`, err);
    res
      .status(500)
      .json({ status: 0, error: `Failed to fetch id:${id} products` });
  }
});

export default router;
