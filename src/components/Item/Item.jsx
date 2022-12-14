import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Item.css";

export const Item = ({ producto }) => {
  return (
    <div className="row" style={{ width: "18rem", margin: "1rem" }}>
      <Link className="card-title" to={`/ItemDetail/${producto.id}`}>
        <Card className="cardhover">
          <Card.Img variant="top" src={producto.foto} />
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
