import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../helpers/gProductos";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { productoId } = useParams();

  useEffect(() => {
    getProducto(productoId).then((item) => setProducto(item));
  }, [productoId]);

  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <ItemDetail producto={producto} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
