import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* <h6>{JSON.stringify(products)}</h6> */}
      <div className="container">
        <div className="row">
          {products.map((product) => {
            const { image, title, price,id } = product;
            return (
                <Card key={id} image={image} title={title} price={price} id={id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
