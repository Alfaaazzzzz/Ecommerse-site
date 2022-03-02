import React, { useEffect, useState } from "react";
import OrderList from "./OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order)=>{
          const {address,id,products}=order
        //   const { street1,street2,city,zip,state}=address
        //   const {title,price,quantity}= products
          return (       
              <div key={id}>
              <OrderList address={address} products={products}/>
              </div>
          )
      })}
    </div>
  );
};

export default Orders;
