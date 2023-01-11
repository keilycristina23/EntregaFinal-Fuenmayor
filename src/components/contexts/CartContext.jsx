import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
};

const agregarCarrito = (item) => {
  const notDuplicate = cartList.findIndex((product) => product.id === item.id);
  if (notDuplicate === -1) {
    setCartList([...cartList, item]);
  } else {
    cartList[notDuplicate].cantidad += item.cantidad;

    setCartList([...cartList]);
  }

  const vaciarCarrito = () => setCartList([]);

  const borrarProducto = (id) =>
    setCartList(cartList.filter((producto) => producto.id !== id));

  const cantidadTotal = () =>
    cartList.reduce((contador, producto) => (contador += producto.cantidad), 0);

  const precioTotal = () =>
    cartList.reduce(
      (contador, producto) => (contador += producto.cantidad * producto.precio),
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        borrarProducto,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
