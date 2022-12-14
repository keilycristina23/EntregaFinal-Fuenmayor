import ItemCount from "../itemCount/itemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const ItemDetail = ({ producto }) => {
  console.log(producto);

  return (
    <div className="" style={{ width: "18rem", margin: "1rem" }}>
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
          <Card.Link>
            <ItemCount />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
