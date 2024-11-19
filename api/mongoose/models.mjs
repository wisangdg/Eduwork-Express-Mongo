import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama produk harus diisi"],
  },
  price: {
    type: Number,
    required: [true, "Harga produk harus diisi"],
  },
  stock: {
    type: Number,
    required: [true, "Stock produk harus diisi"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
