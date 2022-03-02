"use strict";
// Schema - Logical represenation/Rules
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: String, required: true },
});
let Product = (0, mongoose_1.model)("ProductList", ProductSchema);
// console.log(Product)
exports.default = Product;
