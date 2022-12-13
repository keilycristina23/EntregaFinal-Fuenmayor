import React from 'react';
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
              <Nav.Link href="#features">E-SHOP</Nav.Link>
            <Nav.Link href="#pricing">UBICACION</Nav.Link>
            <NavDropdown title="TRATAMIENTOS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TRATAMIENTOS FACIALES</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/skinstudio.ar/">TRATAMIENTOS CORPORALES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PESTAÑAS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <NavDropdown.Item href="https://www.instagram.com/skinstudio.ar/">CONTACTO</NavDropdown.Item>
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
