import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Shop.css";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'
import Product from "../Product/Product";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Shop() {
  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>

      <section>
        <div className="banner_vise">
          <h1>#Readmore</h1>
          <p>Read all case studies with our product</p>
        </div>
      </section>
      <section className="home_featureproducts">
        <h1>Featured Products</h1>
        <h3>Summer Collection New Modern Design</h3>
      </section>
      <Product />
      <section id="pagination">
        <Link to="/Shop" className="shop_next">
          1
        </Link>
        <Link to="/Shop" className="shop_next">
          2
        </Link>
        <Link to="/Shop">
          <div className="shop_next_arrow">
            <ArrowForwardIcon />
          </div>
        </Link>
      </section>
      <Footer/>
    </>
  );
}

export default Shop;
