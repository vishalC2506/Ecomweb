import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
//import Cartpage from "./Components/Cart/Cartpage";
import ProductmainLayout from "./Components/Product/ProductmainLayout";
//import { CartState } from "./Components/context/Context";
import "./App.css";
import Cart from './Components/Cart/Cart'
  
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:id" element={<ProductmainLayout />}></Route>
          <Route exact path="/Shop" element={<Shop />}></Route>
          <Route exact path="/Shop/:id" element={<ProductmainLayout />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
          <Route
            exact
            path="/ProductmainLayout"
            element={<ProductmainLayout />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
