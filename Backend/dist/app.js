"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('./db/mongoose');
const productRouter_1 = require("./router/productRouter");
const cartRouter_1 = require("./router/cartRouter");
const cors_1 = __importDefault(require("cors"));
const orderRouter_1 = require("./router/orderRouter");
// import { json } from 'body-parser'
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(productRouter_1.router);
app.use(cartRouter_1.cartRouter);
app.use(orderRouter_1.orderRouter);
app.listen(PORT, () => {
    console.log("check console");
    console.log(`Server Running on Port Number... ${PORT}`);
});
