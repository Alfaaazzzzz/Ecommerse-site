"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    address: {
        street1: { type: String, required: false },
        street2: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: true },
        zip: { type: String, required: false },
    },
    products: {
        id: { type: String, required: false },
        title: { type: String, required: true },
        price: { type: Number, required: false },
        quantity: { type: Number, required: false },
    }
});
let Order = (0, mongoose_1.model)('orderlists', OrderSchema);
exports.default = Order;
