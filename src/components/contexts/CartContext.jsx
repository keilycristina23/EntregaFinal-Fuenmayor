import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((el) => el.id === id);
  };

  const agregarCarrito = (producto, cantidad) => {
    const newObj = {
      ...producto,
      cantidad,
    };
    if (isInCart(newObj.id)) {
      cartList.map((el) => {
        if (el.id === newObj.id) {
          el.cantidad += newObj.cantidad;
        }
        return el;
      });
    } else {
      setCartList([...cartList, newObj]);
    }
  };

  const vaciarCarrito = () => setCartList([]);

  const borrarProducto = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        borrarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
