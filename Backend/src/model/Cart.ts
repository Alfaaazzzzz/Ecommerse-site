// Schema - Logical represenation/Rules

import { Schema, model } from "mongoose";

interface Cart {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
//   quantity: number;
  //   date: Date
}

const CartSchema = new Schema<Cart>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
//   quantity: { type: Number, required: true },
  //   date:{type: Date, default:Date.now()}
});

let Cart = model<Cart>("carts", CartSchema);

// console.log(Cart)

export default Cart;
