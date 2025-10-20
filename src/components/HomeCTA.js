import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCTA.css";
import backgroundImage from "./background.png"; 

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <div
      className="home-cta"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cta-box">
        <h2><em>Need Help With Cryo-EM Sample Preparation?</em></h2>
        <p>
          small proteins, big proteins, membrane proteins, viruses, nanoparticles,
          vesicles, filaments – we’ve done it all
        </p>
        <button onClick={() => navigate("/contactus")}>CONTACT US</button>
      </div>
    </div>
  );
};

export default HomeCTA;
