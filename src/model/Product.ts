// Schema - Logical represenation/Rules

// const mongoose = require("mongoose");

import { Schema, model } from "mongoose";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}


const ProductSchema = new Schema<Product>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  image: { type: String, required: false },
  rating: { type: String, required: false },
});

let Product = model<Product>("CartProductList", ProductSchema);

console.log(Product)




export default Product;
