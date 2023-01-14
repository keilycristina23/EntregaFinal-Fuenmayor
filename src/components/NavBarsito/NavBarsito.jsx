import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoskin from "../../../public/assets/Logoskin.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

export const ComponentesNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="">
          <img src={logoskin} alt="logo" style={{ width: "5rem" }} />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container">
            <div className="navlink-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }
                to="/"
              >
                INICIO
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }
                to="/categoria/tratamientosFaciales"
              >
                FACIALES
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink-inactive"
                }
                to="/categoria/tratamientosCorporales"
              >
                CORPORALES
              </NavLink>
            </div>
          </Nav>
          <Nav className="container">
            <NavLink className="item-count"></NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navlink-active" : "navlink-active"
              }
              to="/cart"
            >
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
