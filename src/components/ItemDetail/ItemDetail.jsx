import { ItemCount } from "../itemCount/itemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";
import { ButtonCart } from "../ButtonCart/ButtonCart";

export const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito } = useCartContext();
  const [interCart, setInterCart] = useState(true);

  const onAdd = (cantidad) => {
    alert(`cantidad de productos seleccionado:${cantidad}`);
    setCantidad(cantidad);
    agregarCarrito(producto, cantidad);
    setInterCart(false);
  };

  return (
    <div className="grid"
      style={{ width: "1rem", margin: "3rem", padding: "1rem" }}>
      <Card style={{ width: "20rem", padding: "2rem" }}>
        <Card.Img variant="top"  src={producto.foto}  />
        <Card.Body>
          <h3>{producto.nombre} </h3>
          <Card.Text>{producto.descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{producto.duracion}</ListGroup.Item>
          <ListGroup.Item>Precio: {producto.precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {interCart ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          ) : (
            <ButtonCart />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};


<div class="grid">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>;
