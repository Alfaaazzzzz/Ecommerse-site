import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";


const Card:React.FC<{image:string; title:string; price:number; id:number}> = (props) => {

  const dispatch= useDispatch()

  const {image,title,price,id}= props

  const addToCartHandler=()=>{
    dispatch(cartActions.addProductToCart({
      id,
      title,
      price
    }))
  }

  return (
    <div className="card mt-2 mr-2" style={{ width: "18rem" }}>
      <img
        src={image}
        style={{ width: "10rem", height: "10rem" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-text">${price}</h5>
        <button className="btn btn-primary" onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
