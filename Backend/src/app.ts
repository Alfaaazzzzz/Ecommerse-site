import express from "express";
require ('./db/mongoose')
 import { router } from './router/productRouter';
 import { cartRouter } from "./router/cartRouter";
 import cors from 'cors'
// import { json } from 'body-parser'

const app = express();
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(router);
app.use(cartRouter)



app.listen(PORT, () => {
  console.log("check console")
    console.log(`Server Running on Port Number... ${PORT}`);
  });
  