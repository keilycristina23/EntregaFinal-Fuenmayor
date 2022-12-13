import React from 'react';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logoskin from '../../../public/assets/Logoskin.svg'

export const ComponentesNav = () => {

  
  return (


    <>
    <Navbar collapseOnSelect expand="lg"  variant="" style={{background:'gray'}}>
        <Container>
          <img src={logoskin} alt='logo' style={{ width: '7rem' }} />
          <Navbar.Brand href="#home">SKINSTUDIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavLink className={({isActive}) =>isActive ? 'btn btn-success': 'btn btn-outline-success'} href="#features">UBICACIÓN</NavLink>
              <Nav.Link href="https://www.instagram.com/skinstudio.ar/">CONTACTO</Nav.Link>
              
              <NavDropdown title="TRATAMIENTOS" id="collasible-nav-dropdown">
                <NavLink to="/categoria/tratamientosFaciales">TRATAMIENTOS FACIALES</NavLink>
                <br></br>
                <NavLink to="/categoria/tratamientosCorporales">TRATAMIENTOS CORPORALES</NavLink>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
            
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav>
              
            <Nav.Link href="#deets">0</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <CartWidget />
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  
  )
}
