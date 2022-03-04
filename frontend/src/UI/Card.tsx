import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { toast } from "react-toastify";

import './Card.css'


const Card:React.FC<{image:string; title:string; price:number; id:number}> = (props) => {

  const dispatch= useDispatch()

  const {image,title,price,id}= props

  const addToCartHandler=()=>{
    dispatch(cartActions.addProductToCart({
      id,
      title,
      price
    }))
    toast.success('Added to cart')
  }

  return (
    // <div className="card mt-2 mr-2" style={{ width: "17rem" }}>
    //   <img
    //     src={image}
    //     style={{ width: "15rem", height: "15rem" , padding:"20px", }}
    //     className="card-img-top"
    //     alt="..."
    //   />
    //   <div className="card-body">
    //     <div>
    //     <h5 className="card-title">{title}</h5>
    //     </div>
    //     <div>
    //     <h5 className="card-text">Price: ${price}</h5>
    //     </div>
    //     <div className="mt-3">
    //     <button className="btn btn-primary" style={{ marginTop:"5px" }} onClick={addToCartHandler}>Add To Cart</button>
    //     </div>
    //   </div>
    // </div>
    <body>
      <section>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={image} alt="product_image" />
              </div>
              <div className="contentBx">
                <h5>{title}</h5>
                <h5>Price: ${price}</h5>
              </div>
            </div>
            <ul className="sci">
              <li>
              <button className="btn btn-primary" onClick={addToCartHandler}>Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Card;
