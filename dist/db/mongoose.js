"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require("mongoose");
// import mongoose from 'mongoose'
const mongoose_1 = require("mongoose");
//connecting to database
(0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test")
    .then((response) => {
    console.log("Mongo DB Connected Successfully....");
})
    .catch((err) => {
    console.log("Unable to connect to Database");
});
// import { Schema, model, connect } from 'mongoose'
// connect('mongodb://127.0.0.1:27017/cart-product')
//  interface User {
//     id: string;
//     title: string;
//   }
// 2. Create a Schema corresponding to the document interface.
//   const schema = new Schema<User>({
//     id: { type: String, required: true },
//     title: { type: String, required: true },
//   });
//   const UserModel = model<User>('User', schema);
// const me = new UserModel({
//     id:'p1',
//     title:'react'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("error",error)
// })
