import React from "react";
import "./Services.css";
import backgroundImage from "./background.png"; // Image in src/pages

const services = [
  {
    title: "Scalable Computing Power for Cryo-EM Research",
    description:
      "Our Cryo-EM Cloud Application is designed to meet the evolving demands of structural biology research. Built on a highly scalable infrastructure, it offers dynamic resource allocation that adjusts seamlessly to your project’s complexity. Whether you're working with small datasets or large-scale Cryo-EM data, our platform delivers the computational power required for fast, efficient, and reliable analysis—empowering researchers to accelerate discoveries without hardware limitations.",
    image: "/modelling.jpg",
  },
  {
    title: "Advanced Security Protocols",
    description:
      "We prioritize the security of your data. Our cloud application incorporates industry-leading encryption technologies, multi-factor authentication, and regular security audits to protect your sensitive research information. Rest assured, your data is safe from unauthorized access and breaches, allowing you to focus on your research without worrying about data security.",
    image: "/screening.png",
  },
  {
    title: "Seamless Data Management",
    description:
      "Managing large volumes of Cryo-EM data can be challenging, but our platform makes it simple. With intuitive data management tools, you can easily organize, access, and share your datasets. Our application supports a wide range of data formats and integrates seamlessly with existing data repositories, enabling smooth data transfer and collaboration across research teams.",
    image: "/analysis.jpg",
  },
  {
    title: "Preliminary Single-Particle Analysis",
    description:
      "This service analyzes a small dataset (<500 movies) to determine if the sample is suitable for high-resolution single-particle analysis. We’ll run 2D classification, return a low to moderate resolution structure, and estimate how much data you’ll need to achieve your structure goals.",
    image: "/modelling.jpg",
  },
  {
    title: "Flexible Pricing Plans",
    description:
      "We understand that every research project is unique, and so are your budgetary constraints. Our Cryo-EM Cloud Application offers flexible pricing plans tailored to your specific needs. Choose from pay-as-you-go options for occasional use or subscribe to our monthly or annual plans for continuous access to premium features. Our transparent pricing structure ensures that you only pay for the resources you use, with no hidden fees.",
    image: "/consulation.jpeg",
  },
  {
    title: "Team Collaboration and Support",
    description:"Our Cryo-EM Cloud Application is designed to facilitate collaboration among research teams. With shared workspaces, real-time data sharing, and role-based access control, you can collaborate efficiently with colleagues across the globe. Additionally, our dedicated support team is available 24/7 to assist with any technical issues, ensuring that your research is never interrupted.",
    image: "/consulation.jpeg",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero section */}
      <div
        className="services-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="overlay">
          <h1 className="hero-title">Our Services</h1>
        </div>
      </div>

      {/* 50-50 layout for each service */}
      <div className="services-list">
        {services.map((service, idx) => (
          <div key={idx} className="service-block">
            <div className="service-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
