import React, { useEffect, useState } from "react";
import OrderList from "../Order/OrderList";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './Orders.css'
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../store/order-Slice";

const Orders = () => {
  // const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm]=useState('')

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/orders");

  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       const data = await response.json();
  //       setOrders(data);
  //     } catch (error) {
  //       toast.error(`${error}`);
  //     }
  //   };
  //   fetchOrders();
  // }, []);

  const orders= useSelector((state:{order:{orderList:[]}})=>{
    const {orderList}= state.order
    return orderList
  })

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(orderActions.orderList_Pending())
  },[dispatch])

  return (
    <div>
      {/* {JSON.stringify(orders)} */}
      <h1>Your Orders</h1>
      <div className="search">
        <input type='text' placeholder="Search" onChange={event=>{setSearchTerm(event.target.value)}} />  
        {/* {orders.map((order)=>{
          const { address, id, products } = order;
          const {city}= address
          return(
            <div>
              <p>{city}</p>
              </div>
          )
        })} */}
      </div>
      {orders.length === 0 ? (
        <div>
          <h5 className="mt-5">
            It looks like you havn't ordered anything yet?
          </h5>
          <Link to="/home">
            <button className="btn btn-primary mt-2">Shop now</button>
          </Link>
        </div>
      ) : (
        orders.map((order) => {
          const { address, _id, products } = order;
          // console.log(order);
          console.log('id=> ',_id);
          return (
            <div key={_id}>
              <OrderList address={address} products={products} search={searchTerm} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
