import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HomeHero.css"; // Custom styles

const HomeHero = () => {
  return (
    <div className="hero-section">
      <Container className="text-center hero-content">
        <h1 className="hero-title">cryo-em</h1>
        <p className="hero-subtext">
          Our sample-to-structure Cryo-EM services enable novel therapeutic discovery for pharma and biotech companies.
        </p>
        <div className="hero-buttons">
          <Button variant="primary" className="me-3">CRYO-EM SERVICES</Button>
          <Button variant="outline-light">ABOUT PROTEOMA</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
