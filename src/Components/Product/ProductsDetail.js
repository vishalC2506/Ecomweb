import React, { useState } from "react";
import ProductmainLayout from "./ProductmainLayout";
//import Product from "./Product";
//import { useParams } from "react-router";
import "./product_details.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductsDetail({Products}) {
  return (
    <>
       <NavLink to={`${Products.id}`}>
        <div className="Card">
       
          <img src={Products.img} className="image" />
         
          <h3 className="name">{Products.name}</h3>
          <p className="description">{Products.description}</p>
          <h5 className="price">${Products.price}</h5>
          <div className="product_rating">
            {Array(Products.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          <ShoppingCartIcon className="cart_icon" />
        </div>
        </NavLink>
      
    </>
  );
}

export default ProductsDetail;
