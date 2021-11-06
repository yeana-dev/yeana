import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import "./style/Navigation.css";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 12) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      bg={navbar ? "white" : "transparent"}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          id="nav-logo"
          className={navbar ? "scrolled-logo" : "nav-logo"}
        >
          yeana.dev
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => {
            setNavbar(true);
            setExpanded(expanded ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              id="navbar-link"
              href="#home"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              id="navbar-link"
              href="#about"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              id="navbar-link"
              href="#projects"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              id="navbar-link"
              href="#contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              id="navbar-link"
              href="https://drive.google.com/file/d/1dEcJFLwtpDU1eA7JcvnwnTObwRxZKaot/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setExpanded(false)}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
