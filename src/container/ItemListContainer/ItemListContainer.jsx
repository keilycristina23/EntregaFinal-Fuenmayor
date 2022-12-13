import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from '../../components/itemCount/itemCount'
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosCategoria } from '../../helpers/gProductos';



export const ItemListContainer = ({ greetings }) => {

  const [ productos, setProductos ] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoriaId } = useParams ()
    

  useEffect(() => {
    if (categoriaId) {
      
      getProductosCategoria(categoriaId)
        .then((productos) => {
        setProductos(productos);
        setCargando(false);
        
        })
      
    } else {
      getProductos().then((productos) => {
          setProductos(productos);
          setCargando(false);
          });
    }
  }, [categoriaId])
  
console.log(productos)

  return (
    <>
      <h1 className='text-warning'>{greetings}</h1>
     
      { cargando ? <h2>Cargando productos...</h2> : <ItemList productos = {productos} /> }
      <ItemCount />
      
    </>
  )
}


