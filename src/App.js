import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Products from './Components/Products';
import SinglePage from './Components/SinglePage';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar home="Home" about="About" products="Products" contact="Contact"/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/singlepage" element={<SinglePage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
