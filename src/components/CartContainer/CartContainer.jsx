import React from "react";
import { useCartContext } from "../contexts/CartContext";
import InputFormu from "../InputFormu/InputFormu";

export const CartContainer = () => {
  const { cartList, borrarProducto, vaciarCarrito, precioTotal } =
    useCartContext();

  return (
    <>
      <h2>carrito</h2>
      {cartList.map((producto) => (
        <ul key={producto.id}>
          <li>
            <img src={producto.foto} alt="" className="w-25" />
            Nombre-{producto.name}
            Precio-{producto.precio}
            Cantidad-{producto.cantidad}
            <button
              className="btn btn-dark"
              onClick={() => borrarProducto(producto.id)}
            >
              X
            </button>
          </li>
        </ul>
      ))}
      <h1>{precioTotal()}</h1>
      <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
      <br></br>
      <InputFormu />
    </>
  );
};
