import React from 'react'
import './Newsletter.css'
function Newsetter() {
  return (
    <section className="newsletter">
        <div className="news_text">
          <h4>SignUp for Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Your Email Address" />
          <button>Sign Up</button>
        </div>
      </section>
  )
}

export default Newsetter