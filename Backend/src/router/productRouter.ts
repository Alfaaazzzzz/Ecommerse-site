import { Router } from "express";
// const Product = require("../model/Product");
import Product from "../model/Product";

export const router = Router();

router.get("/products", (req, res) => {

    Product.find({}).then((products)=>{
        res.send(products)
        // console.log('fetching All Data')
    }).catch((e)=>{
        res.status(500).send(e.message)
    })

});

router.get('/product/:id',(req,res)=>{
    const _id= req.params.id
    console.log('in id fetching')
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




//filter API's

//   API : localhost:3000/product/mensclothing
//   Method: Get
//   Type : private
//
router.get("/products/mens", async (req, res) => {
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
router.get("/products/jewelery", async (req, res) => {
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
router.get("/products/womens", async (req, res) => {
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
router.get("/products/electronics", async (req, res) => {
  try {
    let product = await Product.find({ category: "electronics" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

// module.exports = router;
