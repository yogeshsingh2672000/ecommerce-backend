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

// fetch all
router.get("/all", async (req, res) => {
  try {
    const products = await fetchProduct();
    res.status(200).json({ products: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// fetch one
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await fetchProduct(id && id);
    res.status(200).json({ products: products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
