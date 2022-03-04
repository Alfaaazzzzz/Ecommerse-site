"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    address: {
        street1: { type: String, required: false },
        street2: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        zip: { type: String, required: false },
    },
    products: [{
            id: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
            title: { type: String, required: true },
        }]
});
let Order = (0, mongoose_1.model)('orderlists', OrderSchema);
exports.default = Order;
