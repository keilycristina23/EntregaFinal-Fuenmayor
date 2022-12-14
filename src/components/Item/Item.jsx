import React from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './Item.css'

export const Item = ({ producto }) => {

  return (
    <Link to={`/ItemDetail/${producto.id}`}> 
      <Card className="row" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.foto} />
      <Card.Body>
      <Card.Title>{producto.name}</Card.Title>
      </Card.Body>
      </Card>
    </Link>
  );

   }
   
 
