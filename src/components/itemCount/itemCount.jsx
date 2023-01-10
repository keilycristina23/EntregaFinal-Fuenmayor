import { useState, useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ stock = 6, initial = 1, onAdd }) => {
  const [contador, setearContador] = useState(initial);

  const CountItemMas = () => {
    if (contador < stock) {
      setearContador(contador + 1);
    }
  };
  const CountItemMenos = () => {
    if (contador > 1) {
      setearContador(contador - 1);
    }
  };

  const ContadorOnAdd = () => {
    onAdd(contador);
  };

  return (
    <>
      <center className="mt-5 border border-1 border-secundary p-3 rounded">
        <Button onClick={CountItemMenos} variant="dark">
          MENOS
        </Button>
        <label>{contador}</label>
        <Button onClick={CountItemMas} variant="dark">
          MAS
        </Button>
        <br></br>
        <br></br>
        <Button onClick={ContadorOnAdd} variant="dark">
          AGREGAR CARRITO
        </Button>
      </center>
    </>
  );
};
