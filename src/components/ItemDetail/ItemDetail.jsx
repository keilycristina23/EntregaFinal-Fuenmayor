import { ItemCount } from "../itemCount/itemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";
import { ButtonCart } from "../ButtonCart/ButtonCart";

export const ItemDetail = ({ producto }) => {
  console.log(producto);

  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito, cartList } = useCartContext();
  const [interCart, setInterCart] = useState(true);

  const onAdd = (cantidad) => {
    alert(`cantidad de productos seleccionado:${cantidad}`);
    setCantidad(cantidad);
    agregarCarrito(producto, cantidad);
    setInterCart(false);
  };
  console.log(cartList);
  console.log(producto);

  return (
    <div style={{ width: "18rem", margin: "1rem" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.foto} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{producto.duracion}</ListGroup.Item>
          <ListGroup.Item>{producto.precio}</ListGroup.Item>
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
