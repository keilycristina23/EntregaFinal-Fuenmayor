import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { gFetch } from '../../helpers/gFetch';


const ItemCount = () => {

const [productos,setProductos]= useState([])




  useEffect(() => {
  

    gFetch()
      .then(productos => (productos))
      .then(productos => setTimeout(() => {
        setProductos(productos)
      }, 3000))
      
      .catch(err => console.log('siemore se ejecuta'))
      .finally(() => console.log('siempre se ejecuta'))

  },[])
  
  const [fecha, setearFecha] = useState(Date())
  const [contador, setearContador] = useState(0)
  console.log(productos)


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
        <Button onClick={CountItemMas} variant="dark">MAS</Button>
        <br></br>
        <h1>{contador}  </h1>
        {fecha}
        <br></br>
      </center>

    </>
  )
  
}

export default ItemCount
