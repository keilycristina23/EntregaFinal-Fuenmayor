import React from "react";
import { Link } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

export const ButtonCart = () => {
  return (
    <>
      <Link
        to="/cart"
        className="mt-5 border border-1 border-secundary p-3 rounded"
      >
        <Button onClick={() => console.log("ir a car")} variant="dark">
          Ir al cart o terminar compra
        </Button>
      </Link>
      <Link
        to="/"
        className="mt-5 border border-1 border-secundary p-3 rounded"
      >
        <Button onClick={() => console.log("ir a home")} variant="dark">
          Seguir comprando
        </Button>
      </Link>
    </>
  );
};
