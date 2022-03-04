"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const Order_1 = __importDefault(require("../model/Order"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.post('/order', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new Order_1.default(req.body);
    console.log(order);
    console.log("post order data check");
    try {
        yield order.save();
        res.status(201).send(order);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
exports.orderRouter.get('/orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Order_1.default.find({}).then(orders => {
        res.send(orders);
    }).catch((err) => {
        res.status(500).send(err);
    });
}));
