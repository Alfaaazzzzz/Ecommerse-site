import React, { useEffect, useState } from "react";
import OrderList from "../Order/OrderList";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
        toast.error(`${error}`);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <div>
          <h5 className="mt-5">It looks like you havn't ordered anything yet?</h5>
          <Link to="/home">
            <button className="btn btn-primary mt-2">Shop now</button>
          </Link>
        </div>
      ) : (
        orders.map((order) => {
          const { address, id, products } = order;
          return (
            <div key={id}>
              <OrderList address={address} products={products} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
