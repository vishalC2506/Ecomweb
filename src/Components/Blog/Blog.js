import React from "react";
import "./Blog.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Blog() {
  return (
    <>
      <div className="main_Nav">
        <Navbar />
      </div>
      <section className="pageheader">
        <div className="banner_vise">
          <h1>#Stay Home</h1>
          <p>save more with coupon & up to 70% off!!</p>
        </div>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog_image">
            <img
              src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg"
              alt="image error"
            />
          </div>
          <div className="blog_details">
            <h4>The Cotton-Jersey Zip up Hoodie </h4>
            <p>
              Copyright ownership gives the owner the exclusive right to use the
              work, with some exceptions.
              <br />
              When a person creates an original work, fixed in a tangible
              medium, he or she automatically owns copyright to the work.
            </p>
            <a href="#" className="a">
              Continue Reading...
            </a>

            <h1>13/01</h1>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog_image">
            <img
              src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"
              alt="image error"
            />
          </div>
          <div className="blog_details">
            <h4>The Cotton-Jersey Zip up Hoodie </h4>
            <p>
              Copyright ownership gives the owner the exclusive right to use the
              work, with some exceptions.
              <br />
              When a person creates an original work, fixed in a tangible
              medium, he or she automatically owns copyright to the work.
            </p>
            <a href="#" className="a">
              Continue Reading...
            </a>

            <h1>13/01</h1>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog_image">
            <img
              src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"
              alt="image error"
            />
          </div>
          <div className="blog_details">
            <h4>The Cotton-Jersey Zip up Hoodie </h4>
            <p>
              Copyright ownership gives the owner the exclusive right to use the
              work, with some exceptions.
              <br />
              When a person creates an original work, fixed in a tangible
              medium, he or she automatically owns copyright to the work.
            </p>
            <a href="#" className="a">
              Continue Reading...
            </a>

            <h1>13/01</h1>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-box">
          <div className="blog_image">
            <img
              src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"
              alt="image error"
            />
          </div>
          <div className="blog_details">
            <h4>The Cotton-Jersey Zip up Hoodie </h4>
            <p>
              Copyright ownership gives the owner the exclusive right to use the
              work, with some exceptions.
              <br />
              When a person creates an original work, fixed in a tangible
              medium, he or she automatically owns copyright to the work.
            </p>
            <a href="#" className="a">
              Continue Reading...
            </a>

            <h1>13/01</h1>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Blog;
