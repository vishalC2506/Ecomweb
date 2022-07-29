import React from "react";
import Cara from "../../img/Cara.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import google_logo from "../../img/google_logo.png";
import pay from "../../img/pay.jpg";
import apple_logo from "../../img/apple_logo.jpg"
import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__details">
          <img src={Cara} alt="error" className="footer__logo" />
          <div className="footer_aboutContent">
            <h3>Contact :</h3>
            <h5> xxx xxx xxx x</h5>
          </div>
          <div className="footer_aboutContent">
            <h3>Address :</h3>
            <h5> xxx xxx xxx x</h5>
          </div>
          <div className="footer_aboutContent">
            <h3>Phone :</h3>
            <h5> xxx xxx xxx x</h5>
          </div>
          <div className="footer_aboutContent">
            <h3>Hours :</h3>
            <h5> xxx xxx xxx x</h5>
          </div>
          <div>
            <h3>Follow us </h3>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="footer_About">
          <h2>About</h2>
          <h4>About us</h4>
          <h4>Delivery Option</h4>
          <h4>Provacy Policy</h4>
          <h4>Terms & Conditions</h4>
          <h4>Contact Us</h4>
        </div>
        <div className="footer_MyAccount">
          <h2>Sign In</h2>
          <h4>View Cart</h4>
          <h4>My Watchlist</h4>
          <h4>Track My Order</h4>
          <h4>Help</h4>
        </div>
        <div className="footer_InstallApps">
          <h2>Install Apps</h2>
          <h5>From App Store or Google Play</h5>
          <div className="footer_playicon">
          <img src={google_logo} className="img1" />
          <img src={apple_logo} className="img2"/>
          </div>
          <h6>Secure payment with us</h6>
          <img src={pay} className="img3" />
        </div>
      </section>
    </>
  );
}

export default Footer;
