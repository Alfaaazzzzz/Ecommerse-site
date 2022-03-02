import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Layout/NavBar';
import Home from './components/Layout/Home';
import Mens from './components/Layout/Mens';
import Womens from './components/Layout/Womens'
import Jewelery from './components/Layout/Jewelery';
import Electronics from './components/Layout/Electronics';
import Orders from './components/Orders';
import Cart from './components/Cart/Cart';

function App() {
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
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
