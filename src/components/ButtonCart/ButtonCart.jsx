import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const ButtonCart = () => {
  return (
    <>
      <Link to="/cart">
        <Button variant="dark">Ir a Cart</Button>
        <br></br>
        <br></br>
      </Link>
      <Link to="/">
        <Button variant="dark">Seguir Comprando</Button>
      </Link>
    </>
  );
};
