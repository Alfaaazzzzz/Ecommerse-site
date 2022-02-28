import express from "express";
require ('./db/mongoose')
// const productRouter= require('./router/productRouter')
 import { router } from './router/productRouter';
// import { json } from 'body-parser'

const app = express();

const PORT = 3000

app.use(router);

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
  console.log("check console")
    console.log(`Server Running on Port Number... ${PORT}`);
  });
  