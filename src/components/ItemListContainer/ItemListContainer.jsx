import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from '../itemCount/itemCount'
import { gFetch } from '../../helpers/gFetch';
import { ItemList } from '../ItemList/ItemList';



export const ItemListContainer = ({ greetings }) => {

  const [ productos, setProductos ] = useState([])
  const [ cargando , setCargando ] = useState (true)

    useEffect(() => {
        gFetch()
      .then(resolve => setProductos(resolve))
      .catch(err => console.log('siempre se ejecuta'))
      .finally(() => setCargando(false))
      
      

  }, [])
  
  return (
    <>
      <h1 className='text-warning'>{greetings}</h1>
     
      { cargando ? <h2>Cargando productos...</h2> : <ItemList productos = {productos} /> }
      <ItemCount />
      
    </>
  )
}



