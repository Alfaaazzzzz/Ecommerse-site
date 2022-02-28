"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('./db/mongoose');
// const productRouter= require('./router/productRouter')
const productRouter_1 = require("./router/productRouter");
// import { json } from 'body-parser'
const app = (0, express_1.default)();
const PORT = 3000;
app.use(productRouter_1.router);
//Test Api
// app.get("/", (req, res) => {
//   res.send("<h1>Ecart Application Running Successfully....</h1>");
// });
// mongoose
//   .connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true })
//   .then((response) => {
//     console.log("Mongo DB Connected Successfully....");
//   })
//   .catch((err) => {});
app.listen(PORT, () => {
    console.log("check console");
    console.log(`Server Running on Port Number... ${PORT}`);
});
