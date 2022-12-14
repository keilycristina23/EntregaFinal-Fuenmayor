import { useState, useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = () => {
  const [contador, setearContador] = useState(0)

  const CountItemMas = () => {
    setearContador(contador + 1)
  }
  const CountItemMenos = () => {
    setearContador(contador - 1)
  }

  const CountAgregarCarrito = () => {


  }
  return (
    <>
      <center className='mt-5 border border-1 border-secundary p-3 rounded'>
        <Button onClick={CountItemMenos} variant="dark">MENOS</Button>
            <label>{contador}</label>
        <Button onClick={CountItemMas} variant="dark">MAS</Button>
        <br></br>
        <br></br>
        <Button onClick={CountAgregarCarrito} variant="dark">AGREGAR CARRITO</Button>

      </center>
    </>
  )
}
export default ItemCount
