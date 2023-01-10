import React from "react";
import { useCartContext } from "../contexts/CartContext";

export const CartContainer = () => {
  const { cartList, borrarProducto, vaciarCarrito } = useCartContext();
  console.log(cartList);

  return (
    <div>
      <h2>carrito</h2>
      {cartList.map((producto) => (
        <ul key={producto.id}>
          <li>
            <img src={producto.foto} alt="" className="w-25" />
            Nombre-{producto.name}
            Precio-{producto.precio}
            <button className="btn btn-dark" onClick={borrarProducto}>
              X
            </button>
          </li>
          <button className="btn btn-outline-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </ul>
      ))}
    </div>
  );
};
