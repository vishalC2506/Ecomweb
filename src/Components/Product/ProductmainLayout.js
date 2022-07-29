import React, { useContext, useState } from "react";
import { useParams } from "react-router";

import "./ProductmainLayout.css";
import Navbar from "../Navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
//import Cart from "../Cart/Cart";
import { CartState } from "../context/Context";
import Footer from "../Footer/Footer";
import Newsetter from "../Newsletter/Newsetter";
//import { addItem, delItem } from "../../Redux/actions/index";
function ProductmainLayout() {
  const [qty, setqty] = useState(1);

  const handleqtypositive = () => {
    setqty(qty + 1);
  };
  const handleqtynegative = () => {
    if (qty > 1) {
      setqty(qty - 1);
    }
  };

  const {
    state: { Products, cart },
    dispatch,
  } = CartState();

  const proid = useParams(); //now we need a product id which we passsed fro the product page
  const prodetail = Products.filter((x) => x.id == proid.id);
  const product = prodetail[0];

  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>
      <section className="singleProimg">
        <div className="img">
          <img src={product.img} alt="image error" />
        </div>
        <div className="singleProDetails">
          <h4>{product.name}</h4>
          <h5>$ {product.price}</h5>

          {cart.some((p) => p.id == product.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
            >
              Add to Cart
            </button>
          )}

          <h4>Product Details</h4>
          <span className="desc">
            Spider-Man started off as the friendly neighbourhood
            <br />
            superhero, but soon became an important member of the Avengers
            Initiative.
            <br />
            He has dealt with threats from far off worlds.
          </span>
        </div>
      </section>
      <Newsetter />
      <Footer />
    </>
  );
}

export default ProductmainLayout;
