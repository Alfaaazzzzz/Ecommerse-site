import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/products");
  //       console.log(response);
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const data = await response.json();
  //       // console.log(data);
  //       setProducts(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const products= useSelector((state:{product:{homeProducts:[]}})=>{
    const{homeProducts}= state.product
    return homeProducts
  })
  // const products= useSelector((state:{cart:{homeProducts:[]}})=> state:{cart:{homeProducts:[]}}
  // })

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(productActions.getProductFetch())
  },[dispatch])

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
