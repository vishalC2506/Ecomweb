import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./Navbar.css";
import { Box } from "@mui/system";
import Cara from "../../img/Cara.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [isActive, setactive] = useState(false);

  return (
    <>
      <section className="Navbar_main">
        <div className="Navbar_logo">
          <img src={Cara} alt="error" />
        </div>
        <div className={isActive ? "Navbar_items actve" : "Navbar_items"}>
          {" "}
          {/* appylying css to menubar items and checking if it is active or not*/}
          <NavLink to="/" className="Navbar_links ">
            Home
          </NavLink>
          <NavLink to="/About" className="Navbar_links">
            About
          </NavLink>
          <NavLink to="/Blog" className="Navbar_links">
            Blog
          </NavLink>
          <NavLink to="/Shop" className="Navbar_links ">
            Shop
          </NavLink>
          <NavLink to="/Contact" className="Navbar_links">
            Contact
          </NavLink>
          <NavLink to="/Cart" className="Navbar_links ">
            <ShoppingCartIcon className="Navbar_cart" id="cart" />
          </NavLink>
          <div className="close_icon">
            <CloseIcon
              id="close_icon"
              onClick={() => {
                setactive(!isActive);
              }}
            />
          </div>
        </div>
        <div id="id">
          <MenuIcon
            onClick={() => {
              setactive(!isActive);
            }}
            className="bar"
          />
          <NavLink to='/Cart'>
          <ShoppingCartIcon className="Navbar_car" />
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Navbar;
