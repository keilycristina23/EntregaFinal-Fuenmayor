import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductos, getProductosCategoria } from "../../helpers/gProductos";
import { Container, Row, Carousel, Spinner } from "react-bootstrap";

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
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/assets/corporal.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=<video>
              '/public/assets/videos/WhatsApp Video 2022-12-14 at 12.23.52.mp4'
            </video>
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/assets/limpiezaDermapen.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          {cargando ? (
            <Spinner animation="grow" />
          ) : (
            <ItemList productos={productos} />
          )}
        </Row>
      </Container>
    </>
  );
};
