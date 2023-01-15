import React from "react";
import { useCartContext } from "../contexts/CartContext";
import "./InforCarrito.css";

const InforCarrito = () => {
  const { cartList, borrarProducto, vaciarCarrito, precioTotal } =
    useCartContext();

  return (
    <>
      <h2>carrito</h2>
      {cartList.map((producto) => (
        <ul key={producto.id}>
          <li>
            <img src={producto.foto} alt="" className="w-25" />{" "}
            <label className="infoProducto">
              Nombre: {producto.nombre} - Precio: {producto.precio}
            </label>
            <button
              className="btn btn-dark"
              onClick={() => borrarProducto(producto.id)}
            >
              X
            </button>
          </li>
        </ul>
      ))}
      <h1>Total: {precioTotal()}</h1>
      <button className="btn btn-outline-dark" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </>
  );
};

export default InforCarrito;
