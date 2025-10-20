import React from "react";
import "./ContactUs.css";
import backgroundImage from "./background.png";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div
              className="about-hero"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div></div>

      {/* Form Section */}
      <div className="contact-form-container">
        <h2>Send us a message</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" name="first_name" placeholder="First Name *" required />
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Institution or Company Name"
          />
          <input type="email" name="email" placeholder="Email *" required />
          <textarea
            name="message"
            rows="5"
            placeholder="What can we do for you? *"
            required
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
