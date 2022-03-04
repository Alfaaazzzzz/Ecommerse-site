import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
// import { useState } from "react";

import "./Cart.css";

const Cart: React.FC<{ cartData: (cartProducts: {}[]) => void }> = (props) => {
  // const [requiredData, setRequiredData]= useState([])
  const dispatch = useDispatch();

  const cartProducts = useSelector((state: { cart: { products: [] } }) => {
    const { products } = state.cart;
    return products;
  });

  // const requiredData=cartProducts.map(product=>{
  //   const {title, price, quantity}= product
  //   return {title,price, quantity}
  //   //  setRequiredData(data)
  // })

  // const data

  props.cartData(cartProducts);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const cartItems = (
    <ul>
      {cartProducts.map((product) => {
        const { id, title, quantity, price, totalPrice } = product;
        return (
          <CartProduct
            key={id}
            item={{
              title: title,
              quantity: quantity,
              total: totalPrice,
              price: price,
              id: id,
            }}
          />
        );
      })}
    </ul>
  );
  return (
    <div>
      <div>
        <h1 className="mt-2">Your Cart</h1>
        <div className="mt-4">
          {cartProducts.length === 0 ? <h5>Cart is Empty</h5> : cartItems}
        </div >
          <button
            className="btn btn-danger buttons"
            onClick={clearCartHandler}
            disabled={cartProducts.length === 0}
          >
            clear cart
          </button>
          <Link to="/checkout">
            <button
              className="btn btn-success buttons ml-2"
              disabled={cartProducts.length === 0}
            >
              checkout
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Cart;
