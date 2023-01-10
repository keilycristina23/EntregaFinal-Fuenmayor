import { ItemCount } from "../itemCount/itemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Input from "../Input/Input";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";
export const ItemDetail = ({ producto }) => {
  console.log(producto);

  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    alert(`cantidad de productos seleccionado:${cantidad}`);
    agregarCarrito(producto, cantidad);
  };
  console.log(cartList);

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
        {cantidad === 0 ? (
          <Card.Body>
            <Card.Link>
              <ItemCount stock={6} initial={1} onAdd={onAdd} />
            </Card.Link>
          </Card.Body>
        ) : (
          <link to={"cart"}>Ir al carrito </link>
        )}
      </Card>
      <Input />
    </div>
  );
};
