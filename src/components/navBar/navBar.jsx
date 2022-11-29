import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSkin from '../../assets/Logoskin.svg'
import './navBar.css'


export const componentesNav = () => {

  const MostrarMensaje = () => {
    alert('le diste al home');
  } 

  
  return (

    <>
  <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SKINSTUDIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">TRATAMIENTOS</Nav.Link>
            <Nav.Link href="#features">E-SHOP</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
            <Nav.Link href="#pricing">UBICACION</Nav.Link>
            <cartWidget/>

          </Nav>
     
        </Container>
      </Navbar>

      
          <div className='logo'>
            <img src={logoSkin}></img>
          </div>
      


    </>
  
  )
}
