import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import Footer from "../Footer/Footer";
function About() {
  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>

      <section>
        <div className="banner_vise">
          <h1>#Know US</h1>
          <p>Read all case studies with our product</p>
        </div>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog_image">
            <img
              src="data:image/jpeg;base64,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"
              alt="image error"
            />
          </div>
          <div className="blog_details">
            <marquee style={{ backgroundColor: "grey" }}>
              <h4>The Cotton-Jersey Zip up Hoodie </h4>
            </marquee>
            <p>
              Copyright ownership gives the owner the exclusive right to use the
              work, with some exceptions. When a person creates an original
              work, fixed in a tangible medium, he or she automatically owns
              copyright to the work. Copyright ownership gives the owner the
              exclusive right to use the work, with some exceptions. When a
              person creates an original work, fixed in a tangible medium, he or
              she automatically owns copyright to the work.
            </p>
          </div>
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
      <Footer/>  
    </>
  );
}

export default About;
