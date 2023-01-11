import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductos, getProductosCategoria } from "../../helpers/gProductos";
import { Container, Row, Card } from "react-bootstrap";
import Loader from "./Loader/Loader";

export const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductosCategoria(categoriaId).then((productos) => {
        setProductos(productos);
        setCargando(false);
      });
    } else {
      getProductos().then((productos) => {
        setProductos(productos);
        setCargando(false);
      });
    }
  }, [categoriaId]);

  console.log(productos);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <Card style={{ width: "20rem", height: "20rem", margin: "15rem" }}>
          <Card.Img variant="top" src="/public/assets/Logoskin.svg" />
          <Card.Body>
            <br></br>
            <Card.Title>SkinStudio</Card.Title>
            <Card.Text>
              "Bienvenidos a SkinStudio, tenemos 34 años de experiencia en el
              cuidado de la piel y contamos, con una gran variedad de
              tratamientos corporales y tratamientos faciales, trabajamos para
              resaltar tu belleza y la salud de tu piel."
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Row>
            {cargando ? <Loader /> : <ItemList productos={productos} />}
          </Row>
        </Container>
      </div>
    </div>
  );
};
