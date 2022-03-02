import { Schema, model } from "mongoose";

interface Product {
    id: string;
    title: string;
    price: number;
    quantity:number;
  }

interface Address {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
}

interface Order {
    id: string;
    address: Address;
    products: Product;
  }

  const OrderSchema= new Schema<Order>({
      id:{type:String,required:true},
      address:{
        street1:{type:String, required:false},
        street2:{type:String, required:false},
        city:{type:String, required:false},
        state:{type:String, required:true},
        zip:{type:String, required:false},
      },
      products:{
        id:{type:String, required:false},
        title:{type:String, required:true},
        price:{type:Number, required:false},
        quantity:{type:Number, required:false},
      }
  })

  let Order= model<Order>('orderlists',OrderSchema)

  export default Order