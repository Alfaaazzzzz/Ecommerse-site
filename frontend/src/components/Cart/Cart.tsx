import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cartProducts = useSelector((state: { cart: { products: [] } }) => {
    const { products } = state.cart;
    return products;
  });
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
      {/* {[{ id: "c1", name: "T-shirt", amount: "2", price: 12.99 }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )} */}
    </ul>
  );
  return (
    <div>
      <h1>Cart</h1>
      {cartItems}
      <div>
        <button className="btn btn-primary mr-2">cancel</button>
        <button className="btn btn-primary">order</button>
      </div>
    </div>
  );
};

export default Cart;
