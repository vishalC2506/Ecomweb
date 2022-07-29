import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import Newsetter from "../Newsletter/Newsetter";
function Home() {

  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>
      <section className="banner">
        <div className="banner_write">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save moore with coupons & up to 70% off!</p>
          <button>Shop Now</button>
        </div>
      </section>
      <section className="card_align">
        <div className="card">
          <img
            src="https://png.pngtree.com/png-vector/20210507/ourlarge/pngtree-free-shipping-vector-banner-for-delivery-promotion-png-image_3257724.jpg"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>Free Shipping</h6>
          </div>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRVNiIZCwbRcxA8LnuXaQDMDBrGAjjc9C0w&usqp=CAU"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>Online Order</h6>
          </div>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLkv2im84Ewz_gn5FwhF6VA294aBLway-5A&usqp=CAU"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>Save Money</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.marketing91.com/wp-content/uploads/2014/11/Promotions-in-marketing.jpg"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>Promotions</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426783142/jftpdyb9bms22rqf9wj8.png"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>Happy Sale</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1646196886843-After%20Hours%20Customer%20Support.png"
            alt="error"
            className="card_img"
          />
          <div className="card_content">
            <h6>24/7 Support</h6>
          </div>
        </div>
      </section>
      <section className="home_featureproducts">
        <span className="h1">Featured Products</span>
        <h3>Summer Collection New Modern Design</h3>
      </section>
      <Product />
      <section className="section1">
        <div className="banner_box">
          <h4>crazy deals</h4>
          <h2>Buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="banner_boxh">Learn More</button>
        </div>
        <div className="banner_box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Session</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="banner_boxh">Collection</button>
        </div>
      </section>
      <section className="section2">
        <div className="banner_box3">
          <h4>crazy deals</h4>
          <span>Crazy winter SALE</span>
        </div>
        <div className="banner_box6">
          <h4>New Collection</h4>
          <span>Grab Now</span>
        </div>
        <div className="banner_box7">
          <h4>T-Shirts</h4>
          <span>New Trendy Picks</span>
        </div>
      </section>
      <Newsetter/>
      <Footer/>
      
    </>
  );
}

export default Home;
