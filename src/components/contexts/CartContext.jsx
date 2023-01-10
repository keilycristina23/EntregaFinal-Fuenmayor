import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (producto) => {
    setCartList([...cartList, producto]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
