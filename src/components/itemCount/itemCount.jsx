import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';


const ItemCount = () => {
  const [fecha, setearFecha] = useState(Date())
  const [contador, setearContador] = useState(0)

  const CountItemMas = () => {
    setearContador(contador + 1)
    setearFecha(Date)
  }
  const CountItemMenos = () => {
    setearContador(contador - 1)
    setearFecha(Date)
  }
  return (
    <>
      <center>
        <Button onClick={CountItemMenos} variant="dark">MENOS</Button>
            <h1>{contador}</h1>
        <Button onClick={CountItemMas} variant="dark">MAS</Button>
        </center>
    </>
  )
}
export default ItemCount
