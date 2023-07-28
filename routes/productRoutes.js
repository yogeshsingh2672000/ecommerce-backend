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

// create signle
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

// update signle
router.post("/update", async (req, res) => {
  const { id, name, img, desc } = req.body;
  try {
    await updateProduct(id, name, img, desc);
    res.status(200).json({ status: 1 });
  } catch (err) {
    console.log("error in updating a product", err);
    res.status(500).json({ status: 1, error: "error in updating a product" });
  }
});

// fetch all
router.get("/all", async (req, res) => {
  try {
    const products = await fetchProduct();
    res.status(200).json(products);
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
    res.status(200).send(products);
  } catch (err) {
    console.error(`Failed to fetch id:${id} products`, err);
    res
      .status(500)
      .json({ status: 0, error: `Failed to fetch id:${id} products` });
  }
});

// delete single
router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    await deleteProduct(id);
    res.status(200).json({ status: 1 });
  } catch (err) {
    console.log(`erorr while deleting product id:${id}`, err);
    res
      .status(500)
      .json({ status: 0, error: `erorr while deleting product id:${id}` });
  }
});

export default router;
