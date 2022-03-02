import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Cart:React.FC<{cartData:(cartProducts:[])=>void}> = (props) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state: { cart: { products: [] } }) => {
    const { products } = state.cart;
    return products;
  });
  
  props.cartData(cartProducts)

  const clearCartHandler=()=>{
    dispatch(cartActions.clearCart())
  }

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
        {cartProducts.length===0?<h5>Cart is Empty</h5>:cartItems}
        </div>
        <button className="btn btn-primary mr-2 mt-2" onClick={clearCartHandler} disabled={cartProducts.length===0}>clear cart</button>
        <Link to='/checkout'>
        <button className="btn btn-primary mt-2" disabled={cartProducts.length===0}>
           checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
