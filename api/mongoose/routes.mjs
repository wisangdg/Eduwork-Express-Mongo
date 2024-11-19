import { Router } from "express";
import Product from "./models.mjs";

const router = Router();

//GET
router.get("/api/v2/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//POST
router.post("/products", async (req, res) => {
  try {
    const { name, price, stock, status } = req.body;
    const product = new Product({ name, price, stock, status });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//PUT
router.put("/api/v2/products/:id", async (req, res) => {
  try {
    const { name, price, stock, status } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, stock, status },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE
router.delete("/api/v2/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
