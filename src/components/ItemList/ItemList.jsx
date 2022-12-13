import React from 'react'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import { Item } from '../Item/Item';

export const ItemList = ({ productos }) => {

  return (
    <>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
        
      ))}
       
    </>
  );
};
