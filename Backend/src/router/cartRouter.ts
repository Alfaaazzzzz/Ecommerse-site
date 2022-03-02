import { Router } from "express";

import Cart from "../model/Cart";

export const cartRouter = Router();

cartRouter.post("/cart", async (req, res) => {
  const cart = new Cart(req.body);
  console.log("hello check");
  try {
    console.log("trying");
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).send("its a error");
  }
});

cartRouter.get("/cart", async (req, res) => {
  Cart.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});
