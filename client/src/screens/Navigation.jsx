import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "./style/Navigation.css";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 12) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar bg={navbar ? "white" : "transparent"} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" id="nav-logo">
          yeana.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link id="navbar-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="navbar-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link id="navbar-link" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link id="navbar-link" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link
              id="navbar-link"
              href="https://drive.google.com/file/d/19EaeB6kRnJcQpKLiGzM_ljb4zPgCUys1/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
