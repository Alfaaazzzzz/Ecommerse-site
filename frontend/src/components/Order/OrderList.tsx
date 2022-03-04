import React from "react";
import "./OrderList.css";

const OrderList: React.FC<{
  address: {
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
  };
  products: [{ title: string; price: number; quantity: number }];
}> = (props) => {
  const productData = props.products.map((product) => {
    return product;
  });

  const [{ title, price, quantity }] = productData;
  const { street1, street2, city, zip, state } = props.address;
  return (
    <body>

    
    <div className="order">
      <header>
        <h3>{title}</h3>
      </header>
      <div className="details">
        <div className="quantity">
          <h5>
            qty: <span>{quantity}</span>
          </h5>
        </div>
      </div>
      <div>
        <h4 className="price">price: ${price}</h4>
      </div>
      <div>
        <h5>
          Address: {street1} {street2}
        </h5>
        <h5>city: {city}</h5>
        <h5>state: {state}</h5>
        <h5>zip code: {zip}</h5>
      </div>
    </div>
    </body>
  );
};

export default OrderList;
