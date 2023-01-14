import React from "react";
import Alert from "react-bootstrap/Alert";

export const NoIdError = () => {
  return (
    <>
      {["danger"].map((variant) => (
        <center>
          <Alert key={variant} variant={variant}>
            ¡Hola! Tu carrito esta vacio, dirigite a Inicio. Has click{" "}
            <Alert.Link to="/"> aqui. </Alert.Link>.
          </Alert>
        </center>
      ))}
    </>
  );
};
