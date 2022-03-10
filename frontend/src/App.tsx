import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/NavBar";
import Home from "./components/Layout/Home";
import Mens from "./components/Layout/Mens";
import Womens from "./components/Layout/Womens";
import Jewelery from "./components/Layout/Jewelery";
import Electronics from "./components/Layout/Electronics";
import Orders from "./components/Order/Orders";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/checkoutForm";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { orderActions } from './store/order-Slice';


function App() {
  const [products, setProducts] = useState([{}]);
  // const [orderData, setOrderData]= useState({})
  // const [address, setAddress] = useState({});

  const CartData = (cartProducts: {}[]) => {
   
    setProducts(cartProducts);
  };
  // console.log("products =>", products);

  // const formData = (formData: {}) => {
  //   setAddress(formData);
  // };
  // console.log("Address =>", address);

  const dispatch= useDispatch()

//  function* orderSaga():Generator<StrictEffect>{
//   yield takeEvery("order/orderPost_Pending",workPostOrdersFetch )
//   }

  const sendOrder = async (formData:{}) => {
    const totalOrderData = {
      address:formData,
      products,
    };
    // setOrderData(totalOrderData)

    dispatch(orderActions.orderPost_Success(totalOrderData))

    // try {
    //   console.log("inside try");
    //   const response = await fetch("http://localhost:5000/order", {
    //     method: "POST",
    //     body: JSON.stringify(totalOrderData),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });
    //   console.log("after try");

    //   if (!response.ok) {
    //     throw new Error("something went wrong!");
    //   }
    //   const data = response.json();
    //   console.log("data", data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // function* workPostOrdersFetch():any{
  //   try {
  //     const response= yield call(()=>fetch('http://localhost:5000/order',{
  //       method: "POST",
  //       body: JSON.stringify(orderData),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     }))
  //     if (!response.ok) {
  //           throw new Error("something went wrong!");
  //         }
  //       const data = response.json();
  //       console.log("data", data);
  //   } catch (error) {
  //     console.log('error==> ',error);
  //   }
  // }
      
    

  return (
    <div className="App">
      <Navbar />
      {/* <h6> Address:  */}
      {/* {JSON.stringify(address)}</h6>
      <h6>Products: {JSON.stringify(products)}</h6> */}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart cartData={CartData} />} />
          <Route
            path="/checkout"
            element={<CheckoutForm  onSend={sendOrder} />}
          />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}


export default App;
