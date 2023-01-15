import React from "react";
import Alert from "react-bootstrap/Alert";

const IdDesconocido = () => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          <h2> Error! Esta página no existe!</h2>
        </Alert>
      ))}
    </>
  );
};

export default IdDesconocido;
