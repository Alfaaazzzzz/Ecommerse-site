import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";

const Mens = () => {
  const [mensCollection, setMensCollection] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch("http://localhost:5000/products/mens");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setMensCollection(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCollection();
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          {mensCollection.map((product) => {
            const { image, title, price,id } = product;
            return <Card key={id} image={image} title={title} price={price} id={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mens;
