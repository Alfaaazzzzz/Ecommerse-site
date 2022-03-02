// import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Layout/NavBar';
import Home from './components/Layout/Home';
import Mens from './components/Layout/Mens';
import Womens from './components/Layout/Womens'
import Jewelery from './components/Layout/Jewelery';
import Electronics from './components/Layout/Electronics';
import Orders from './components/Orders';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/checkoutForm';
import { useEffect, useState } from "react";

// interface order{
//   products:any[],
//   address:{}
// }

function App() {
  const [products, setProducts]= useState([])
  const [address, setAddress]= useState({})
  const CartData=(cartProducts:[])=>{
    // console.log('cartData',cartProducts);
    setProducts(cartProducts)
  }
  console.log('products',products);

  const formData=(formData:{})=>{
    setAddress(formData)
  }
  console.log('Address',address);
  
  const orderData= {
    products,
    address
  }

  //in address data is not coming
  //post is giving error

   const sendOrder=async()=>{
     console.log('orderData:', orderData.address);
    try {
      console.log('inside try');
      //inside this fetch it is throwing error
      const response= await fetch('http://localhost:5000/order',{
        method:'POST',
        body: JSON.stringify(orderData),
        headers:{
          "content-type": "application/json",
        },
      });
      console.log('after try');

      if(!response.ok){
        throw new Error('something went wrong!')
      }
      const data= response.json()
      console.log('data',data);
    } catch (error) {
      console.log(error);
    }
   }

  // useEffect(()=>{
    
  // },[])

  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home"/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/mens' element={<Mens/>} />
          <Route path='/womens' element={<Womens/>} />
          <Route path='/jewelery' element={<Jewelery/>} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/cart' element={<Cart cartData={CartData}/>} />
          <Route path='/checkout' element={<CheckoutForm formData={formData} onSend={sendOrder}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
