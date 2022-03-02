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
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
});

let Product = model<Product>("ProductList", ProductSchema);

// console.log(Product)

export default Product;
