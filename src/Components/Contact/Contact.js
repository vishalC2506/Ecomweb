import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Contact.css";
function Contact() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleinput = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setuser({...user,[name]:value})
  };
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
      <section className="contact_details">
        <div className="details">
          <span> GET IN TOUCH</span>
          <h2>visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>

          <div>
            <ul>
              <li>
                <p>🗺️ &nbsp; zero mile muzaffarpur</p>
              </li>
              <li>
                <p>📭 &nbsp; xyz @gmail.com</p>
              </li>
              <li>
                <p>📱 &nbsp; +91 xxx xxx xxx x</p>
              </li>
              <li>
                <p>🕘 &nbsp; Monday To Saturday 9:00am to 16:00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.450151640996!2d85.38685541495367!3d26.14946528346224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10845d71115d%3A0xb4cf1cac46b8959a!2sNew%20Zero%20Mile%2C%20Bihar%20842001!5e0!3m2!1sen!2sin!4v1656508512355!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            name="username"
            placeholder="'Your Name"
            value={user.username}
            onChange={handleinput}
          />
          <input
            type="e-mail"
            name="email"
            placeholder="E-mail"
            value={user.email}
            onChange={handleinput}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={user.subject}
            onChange={handleinput}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            id=""
            cols={30}
            rows={10}
            value={user.message}
            onChange={handleinput}
          ></textarea>
          <button>Submit</button>
        </form>

        <div className="people">
          <div>
            <img
              src="https://www.business2community.com/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg"
              className="people_img"
            />
            <p className="people_p">
              <span className="people_span">John Doe</span>Senior Marketing
              Manager
              <br />
              Phone: xxx xxx xxx x<br />
              Email:xyz@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://www.business2community.com/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg"
              className="people_img"
            />
            <p className="people_p">
              <span className="people_span">John Doe</span>Senior Marketing
              Manager
              <br />
              Phone: xxx xxx xxx x<br />
              Email:xyz@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://www.business2community.com/wp-content/plugins/wp-user-avatars/wp-user-avatars/assets/images/mystery.jpg"
              className="people_img"
            />
            <p className="people_p">
              <span className="people_span">John Doe</span>Senior Marketing
              Manager
              <br />
              Phone: xxx xxx xxx x<br />
              Email:xyz@gmail.com
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
