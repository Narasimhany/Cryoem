import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeServices.css";


const services = [
  {
    title: "Scalable Computing Power",
    image: "consulation.jpeg",
  },
  {
    title: "Advanced Data Security",
    image: "screening.png",
  },
  {
    title: "Seamless Data Management",
    image: "analysis.jpg",
  },
  {
    title: "Preliminary Particle Analysis",
    image: "modelling.jpg",
  },
];

const HomeServices = () => {
  return (
    <div className="services-section">
      <Container fluid>
        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={3}>
              <Link to="/services" className="card-link">
                <Card className="service-card">
                  <Card.Img variant="top" src={service.image} alt={service.title} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
