import React, { useContext, useEffect, useState } from "react";
import { CartState, Crt } from "../context/Context";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import Footer from "../Footer/Footer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function Cartpage() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(); //event.target.value
  useEffect(() => {
    setTotal(
      cart.reduce((acc, currvalue) => acc + currvalue.price * currvalue.qty, 0)
    );
  }, [[cart], total]);
  

  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>
      <section className="table_main">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <td>
                  <DeleteOutlineIcon
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }}
                  />
                </td>
                <td>
                  <img src={product.img} alt="image error" />{" "}
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <input
                    type="number"
                    value={product.qty}
                    onChange={(e) => {
                      {
                        if (e.target.value=='') {
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: product.id,
                              qty:1,
                            },
                          });
                        } else {
                          if (e.target.value>=0)
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: product.id,
                              qty: e.target.value,
                            },
                          });
                        }
                      }
                    }}
                  ></input>
                </td>
                <td> {product.price * product.qty} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="Cart_add">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter your Coupon" />
            <button>Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>{total}</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed To Checkout</button>
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
}

export default Cartpage;
