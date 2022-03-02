// import classes from './CartButton.module.css'

import { useSelector } from 'react-redux';
import './CartButton.css'

const CartButton = () => {

  const cartQuantity=useSelector((state:{cart:{totalQuantity:number}})=>{
    const {totalQuantity}=state.cart
    // console.log('totalQuan',totalQuantity);
    return totalQuantity
  })
  // console.log('cartQuantity',cartQuantity.cart);
  return (
    <button  className="button" >
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
