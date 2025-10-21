import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import backImage from "./back.png";  // ✅ Import the image from components

export const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginbottom: "-75px",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/"
         style={{ marginLeft: "-95px" }}>
          <img
            src="/logo.png"   // keep Logo.png inside public/ folder
            alt="CryoEM Logo"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" style={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}>
              Services
            </Nav.Link>
            {/*<Nav.Link as={Link} to="/projects" style={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}>
              Projects
            </Nav.Link>*/}
            <Nav.Link as={Link} to="/contactus" style={{ fontSize: "1.5rem", fontWeight: "600", color: "black" }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
