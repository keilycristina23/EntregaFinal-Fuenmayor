import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProducto } from "../../helpers/gProductos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { productoId } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProducto(productoId)
      .then((item) => setProducto(item))
      .finally(() => setCargando(false));
  }, [productoId]);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <Container>
            <Row>
              {cargando ? <Loader /> : <ItemDetail producto={producto} />}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
