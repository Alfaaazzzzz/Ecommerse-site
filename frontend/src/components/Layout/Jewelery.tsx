import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";
import Card from "../../UI/Card";

const Jewelery = () => {
  // const [jeweleryCollection, setJeweleryCollection] = useState([]);

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/products/jewelery");
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const data = await response.json();
  //       setJeweleryCollection(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCollection();
  // });

  const dispatch= useDispatch()

  const jeweleryCollection= useSelector((state:{product:{jeweleryProducts:[]}})=>{
    const {jeweleryProducts}= state.product
    return jeweleryProducts
  })

  useEffect(()=>{
    dispatch(productActions.getJeweleryProductFetch())
  },[dispatch])

  return (
    <div>
      <div className="container">
        <div className="row">
          {jeweleryCollection.map((product) => {
            const { image, title, price,id } = product;
            return <Card key={id} image={image} title={title} price={price} id={id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Jewelery;
