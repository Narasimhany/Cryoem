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
        </div>
      </div>

      {/* ⭐ Pricing Section ABOVE form */}
      <div className="contact-pricing">
        <div className="pricing-card">
          <div className="pricing-header free-header">Free 30 Day Trial</div>
          <ul>
            <li>Full access to the CryoCloud web-application for Cryo-EM data processing</li>
            <li>No setup or infrastructure needed</li>
            <li>20 hours of compute time</li>
            <li>2 TB of storage</li>
            <li>Access to the CryoCloud Uploader for real-time uploads during data acquisition</li>
          </ul>
        </div>

        <div className="pricing-card">
          <div className="pricing-header paid-header">Paid Subscription</div>
          <ul>
            <li>Full access to the CryoCloud web-application for Cryo-EM data processing</li>
            <li>No setup or infrastructure required</li>
            <li>Flexible compute hour bundles for research teams</li>
            <li>Add-ons available for extra hours or more users</li>
            <li>Access to CryoCloud Uploader during data acquisition</li>
            <li>Pay-per-use storage & archival monthly</li>
            <li>Enterprise options such as custom VPC deployment</li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <div className="contact-form-container">
        <h2>Send us a message</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" name="first_name" placeholder="First Name *" required />
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>

          <input type="text" name="company" placeholder="Institution or Company Name" />
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
