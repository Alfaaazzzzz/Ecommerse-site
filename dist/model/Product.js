"use strict";
// Schema - Logical represenation/Rules
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: false },
    description: { type: String, required: false },
    category: { type: String, required: false },
    image: { type: String, required: false },
    rating: { type: String, required: false },
});
let Product = (0, mongoose_1.model)("CartProductList", ProductSchema);
console.log(Product);
exports.default = Product;
