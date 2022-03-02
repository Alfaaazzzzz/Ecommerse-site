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
exports.router = void 0;
const express_1 = require("express");
// const Product = require("../model/Product");
const Product_1 = __importDefault(require("../model/Product"));
exports.router = (0, express_1.Router)();
exports.router.get("/products", (req, res) => {
    Product_1.default.find({}).then((products) => {
        res.send(products);
        console.log('fetching All Data');
    }).catch((e) => {
        res.status(500).send(e.message);
    });
});
exports.router.get('/product/:id', (req, res) => {
    const _id = req.params.id;
    console.log('in id fetching');
    console.log(_id);
    Product_1.default.findById(_id).then((product) => {
        if (!product) {
            res.status(404).send();
        }
        res.send(product);
        console.log(product);
    }).catch((error) => {
        res.status(500).send(error.message);
    });
});
//filter API's
//   API : localhost:3000/product/mensclothing
//   Method: Get
//   Type : private
//
exports.router.get("/products/mens", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield Product_1.default.find({ category: "men's clothing" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: " Server Error" }] });
    }
}));
/*
  API : localhost:3000/product/jewelery
  Method: Get
  Type : private
  */
exports.router.get("/products/jewelery", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield Product_1.default.find({ category: "jewelery" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: " Server Error" }] });
    }
}));
/*
  API : localhost:3000/product/womensclothing
  Method: Get
  Type : private
  */
exports.router.get("/products/womens", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield Product_1.default.find({ category: "women's clothing" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: " Server Error" }] });
    }
}));
/*
  API : localhost:3000/product/electronics
  Method: Get
  Type : private
  */
exports.router.get("/products/electronics", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield Product_1.default.find({ category: "electronics" });
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: " Server Error" }] });
    }
}));
// module.exports = router;
