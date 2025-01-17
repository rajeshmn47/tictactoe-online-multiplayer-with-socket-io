import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../images/Logo.gif";

const NavBar = () => {
  return (
    <div className="navbar">
      <Navbar
        className="px-lg-5 fixed-top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container fluid className="fluid px-lg-5 ">
          <Navbar.Brand href="/#headerMain">
            <img src={logo} alt="" className="img-fluid" width="60" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ml-10"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a className="mr-5" href="/#aboutMe">
                About Me
              </a>
              <a className="mr-5" href="/#work">
                Work
              </a>
              <a className="mr-5" href="/#skills">
                Skills
              </a>
              <a className="mr-5" href="/#contact">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
