import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";
import Card from "../../UI/Card";

const Womens = () => {
  // const [womensCollection, setWomensCollection] = useState([]);

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/products/womens");
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const data = await response.json();
  //       setWomensCollection(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCollection();
  // });

  const womensCollection= useSelector((state:{product:{womensProducts:[]}})=>{
    const {womensProducts}= state.product
    return womensProducts
  })

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(productActions.getWomensProductFetch())
  },[dispatch])


  return (
    <div>
      <div className="container">
        <div className="row">
          {womensCollection.map((product) => {
            const { image, title, price,id } = product;
            return <Card key={id} image={image} title={title} price={price} id={id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Womens;
