import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logoskin from "../../../public/assets/Logoskin.svg";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const ComponentesNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "red", borderBottom: "1px solid #E5E8E8" }}
    >
      <Container>
        <Link to="/">
          {" "}
          <img src={logoskin} alt="logo" style={{ width: "5rem" }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">INICIO</Link>
            <Link>
              <Link to="/categoria/tratamientosFaciales">
                TRATAMIENTOS FACIALES
              </Link>
              <Link to="/categoria/tratamientosCorporales">
                TRATAMIENTOS CORPORALES
              </Link>
            </Link>
          </Nav>

          <Link to="/cart">
            <CartWidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
