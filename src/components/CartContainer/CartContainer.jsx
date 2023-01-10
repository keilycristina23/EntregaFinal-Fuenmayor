import React from "react";
import { useCartContext } from "../contexts/CartContext";

export const CartContainer = () => {
  const { cartList } = useCartContext();
  console.log(cartList);

  return (
    <div>
      {cartList.map((producto) => (
        <li>{producto.name}</li>
      ))}
    </div>
  );
};
