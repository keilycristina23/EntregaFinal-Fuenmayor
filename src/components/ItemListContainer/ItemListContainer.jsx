import React from 'react'
import ItemCount from '../itemCount/itemCount'



export const ItemListContainer = ({ greetings }) => {
  
  return (
    <>
      <h1 className='text-warning'>{greetings}</h1>
      <ItemCount />
      {productos.map(productos => <p key={productos.id}> {productos.Name} </p>)}


    </>
  )
}

