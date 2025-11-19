import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate(); // initialize navigation

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Main_Bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container fluid className="text-center hero-content">
        <h1 className="hero-title">cryo-em</h1>
        <p className="hero-subtext">
          Our sample-to-structure Cryo-EM services enable novel therapeutic discovery for pharma and biotech companies.
        </p>
        <div className="hero-buttons">
          {/* 🔗 Navigate to /services */}
          <Button
            variant="secondary"
            className="me-3"
            onClick={() => navigate("/services")}
          >
            CRYO-EM SERVICES
          </Button>

          {/* 🔗 Navigate to /about */}
          <Button
            variant="outline-light"
            onClick={() => navigate("/about")}
          >
            ABOUT Practi Cloud
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
