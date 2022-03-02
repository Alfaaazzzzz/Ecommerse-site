import React from "react";

const OrderList: React.FC<{
  address: {
    street1: string;
    street2: string;
    city: string;
    zip: string;
    state: string;
  };
  products: { title: string; price: number; quantity: number };
}> = (props) => {
  const { title, price, quantity } = props.products;
  const { street1, street2, city, zip, state } = props.address;
  return (
    <div>
      <li className="product">
        <header>
          <h3>{title}</h3>
          {/* <div className="price">
          ${props.price.toFixed(2)}
        </div> */}
        </header>
        <div className="details">
          <div className="quantity">
            <h5>
              qty: <span>{quantity}</span>
            </h5>
          </div>
        </div>
        <div><h4>price: ${price}</h4></div>
        <div>
            <h5>Address: {street1} {street2}</h5>
            <h5>city: {city}</h5>
            <h5>state: {state}</h5>
            <h5>zip code: {zip}</h5>
        </div>
      </li>
    </div>
  );
};

export default OrderList;
