import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import './CartProduct.css'

const CartProduct:React.FC<{item:{title:string;quantity:number;total:number;price:number;id:string}}> = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch(cartActions.addProductToCart({
      id,
      title,
      price
    }))
  };
  const decHandler = () => {
    dispatch(cartActions.removeProductFromCart(id))
  };

  return (
    <li className='product' >
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}
          <span className="productprice" >(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details" >
        <div className="quantity" >
           x<span>{quantity}</span>
        </div>
        <div className="actions" >
          <button onClick={decHandler}>-</button>
          <button onClick={incHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;