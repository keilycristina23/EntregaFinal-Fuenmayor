import React, { useState } from "react";
import { CarroVacio } from "../CarroVacio/CarroVacio";
import { useCartContext } from "../contexts/CartContext";
import { IdAlert } from "../IdAlert/IdAlert";
import InforCarrito from "../InforCarrito/InforCarrito";
import InputFormu from "../InputFormu/InputFormu";

export const CartContainer = () => {
  const [ordenId, setOrdenId] = useState(null);

  const { cartList } = useCartContext();

  return (
    <div>
      {cartList.length > 0 && !ordenId ? (
        <>
          <InforCarrito />
          <InputFormu setOrdenId={setOrdenId} />
        </>
      ) : ordenId ? (
        <IdAlert id={ordenId} />
      ) : (
        <div>
          <CarroVacio />
        </div>
      )}
    </div>
  );
};
