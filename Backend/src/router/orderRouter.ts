import { Router } from "express";

import Order from "../model/Order";

export const orderRouter= Router();

orderRouter.post('/order',async (req,res)=>{
    const order= new Order(req.body)
    // console.log(order)
    // console.log("post order data check")
    try {
        await order.save()
        res.status(201).send(order)
    } catch (error) {
        res.status(400).send(error)
    }
})

orderRouter.get('/orders',async(req,res)=>{
    Order.find({}).then(orders=>{
        res.send(orders)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})