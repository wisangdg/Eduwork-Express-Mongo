import { ObjectId } from "mongodb";
import { connectMongoDB } from "../../config/mongodb.mjs";

export const createProduct = async (req, res) => {
  const db = await connectMongoDB();
  const collection = db.collection("products");
  try {
    const newProduct = req.body;

    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      return res.status(400).send({ error: "Invalid product data" });
    }
    const result = await collection.insertOne(newProduct);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send({ error: `Failed to add product: ${err.message}` });
  }
};

export const getProduct = async (req, res) => {
  const db = await connectMongoDB();
  const collection = db.collection("products");
  try {
    const product = await collection.find().toArray();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ error: "Gagal memuat data" });
  }
};

export const updateProduct = async (req, res) => {
  const db = await connectMongoDB();
  const collection = db.collection("products");
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return res.status(404).send({ error: "Produk tidak ditemukan" });
    }
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: "Gagal mengupdate data" });
  }
};

export const deleteProduct = async (req, res) => {
  const db = await connectMongoDB();
  const collection = db.collection("products");
  try {
    const { id } = req.params;
    const result = await collection.deleteOne({ _id: ObjectId(id) });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: "Gagal menghapus data" });
  }
};

// Fungsi `getUsers`, `updateUser`, dan `deleteUser` dapat ditambahkan di sini
