import React, { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducers";

export const Crt = createContext();
function Context({ children }) {
  const Products = [
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwUVRtBAV93kMpJRtvsHDbppwh8-m52EBtw&usqp=CAU",
      name: "vishal",
      id: 1,
      descripton: "Black-shirt",
      price: 550,
      rating: 3,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbogcvouUN-Y-9uIuSTVQfowzFmNjxdlYBXw&usqp=CAU",
      name: "vishal",
      id: 2,
      descripton: "Black-shirt",
      price: 550,
      rating: 3,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLVecLrvDHO9b60yPV0wZwK_DIaXmjUf-SA&usqp=CAU",
      name: "vishal",
      id: 3,
      descripton: "Black-shirt",
      price: 550,
      rating: 3,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TpyMGPuxvXlyZiuK0NrZRpp2nEHwTux2vA&usqp=CAU",
      name: "vishal",
      id: 4,
      descripton: "Black-shirt",
      price: 550,
      rating: 1,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AhhWFcL0j93sYmvh7BqWUGGhtZJytz0GQA&usqp=CAU",
      name: "vishal",
      id: 5,
      descripton: "Black-shirt",
      price: 550,
      rating: 4,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGv1eGFX4F9FmtoRNhups0-fPsSMtQQ8CcQ&usqp=CAU",
      name: "vishal",
      id: 6,
      descripton: "Black-shirt",
      price: 550,
      rating: 5,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhI-Nje9F3K4lozIfbmbao-0cjaXXiLOyOQ&usqp=CAU",
      name: "vishal",
      id: 7,
      descripton: "Black-shirt",
      price: 550,
      rating: 4,
      length: 1,
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJKVE8Ha1FDo1QWB3LM0lI2I6CBd1H11Jyw&usqp=CAU",
      name: "vishal",
      id: 8,
      descripton: "Black-shirt",
      price: 550,
      rating: 3,
      length: 1,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    Products: Products,
    cart: [],
  });
  return <Crt.Provider value={{ state, dispatch }}>{children}</Crt.Provider>;
}

export default Context;

export const CartState=()=>{
  return useContext(Crt)
}
