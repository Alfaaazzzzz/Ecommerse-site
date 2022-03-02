"use strict";
// Schema - Logical represenation/Rules
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    //   quantity: { type: Number, required: true },
    //   date:{type: Date, default:Date.now()}
});
let Cart = (0, mongoose_1.model)("carts", CartSchema);
// console.log(Cart)
exports.default = Cart;
