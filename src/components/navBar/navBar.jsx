import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import logoskin from "../../../public/assets/Logoskin.svg";
import "./NavBar.css";

export const ComponentesNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "white", borderBottom: "1px solid #E5E8E8" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logoskin} alt="logo" style={{ width: "5rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="/">
              INICIO
            </Nav.Link>
            <Nav.Link
              className="nav-links"
              href="https://www.instagram.com/skinstudio.ar/"
            >
              CONTACTO
            </Nav.Link>
            <NavDropdown
              className={({ isActive }) =>
                isActive ? "navlink-activo" : "navlink-inactivo"
              }
              title="TRATAMIENTOS"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="nav-links"
                href="/categoria/tratamientosFaciales"
              >
                TRATAMIENTOS FACIALES
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav-links"
                href="/categoria/tratamientosCorporales"
              >
                TRATAMIENTOS CORPORALES
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {"0"}
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
