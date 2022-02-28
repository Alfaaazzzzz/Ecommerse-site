import { Router } from "express";
// const Product = require("../model/Product");
import Product from "../model/Product";

export const router = Router();

router.get("/products", (req, res) => {
    
    Product.find({}).then((products)=>{
        res.send(products)
    }).catch((e)=>{
        res.status(500).send(e.message)
    })

  //     console.log(products)
//   res.send(products);
});

router.get('/product/:id',(req,res)=>{
    const _id= req.params.id
    console.log(_id)
    Product.findById(_id).then((product)=>{
        if(!product){
            res.status(404).send()
        }
        res.send(product)
        console.log(product)
    }).catch((error)=>{
        res.status(500).send(error.message)
    })
})

/*
API : localhost:3000/product/:id
Method: Get
Type : private
*/
router.get("/product/:id", async (req, res) => {
  try {
    let productId = req.params.id;
    console.log(productId);
    let product = await Product.findOne({ _id: productId });
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

//   API : localhost:3000/product/mensclothing
//   Method: Get
//   Type : private
//
router.get("/mensclothing", async (req, res) => {
  try {
    let product = await Product.find({ category: "men's clothing" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

/*
  API : localhost:3000/product/jewelery
  Method: Get
  Type : private
  */
router.get("/jewelery", async (req, res) => {
  try {
    let product = await Product.find({ category: "jewelery" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

/*
  API : localhost:3000/product/womensclothing
  Method: Get
  Type : private
  */
router.get("/womensclothing", async (req, res) => {
  try {
    let product = await Product.find({ category: "women's clothing" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

/*
  API : localhost:3000/product/electronics
  Method: Get
  Type : private
  */
router.get("/electronics", async (req, res) => {
  try {
    let product = await Product.find({ category: "electronics" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

// module.exports = router;
