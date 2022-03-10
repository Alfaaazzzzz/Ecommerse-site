import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";
import Card from "../../UI/Card";

const Mens = () => {
  // const [mensCollection, setMensCollection] = useState([]);

  // useEffect(() => {
  //   const fetchCollection = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/products/mens");
  //       if (!response.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const data = await response.json();
  //       setMensCollection(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchCollection();
  // });

  const mensCollection= useSelector((state:{product:{mensProducts:[]}})=>{
    const {mensProducts}= state.product
    return mensProducts
  })

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(productActions.getMensProductFetch())
  },[dispatch])

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* {JSON.stringify(mensCollection)} */}
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
