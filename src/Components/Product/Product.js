import React from "react";
import Products_Details from "./ProductsDetail";
import "./Product.css";
import { CartState } from "../context/Context";

function Product() {
  const {state:{Products}}=CartState();
  
  return (
    <>
      <div className="Product">
        {Products.map((products) => (
          <div className="product_y" key={products.id}>
           { <Products_Details Products={products} />}
          </div>
        ))}
      </div>
    </>
  );
}
export default Product;
