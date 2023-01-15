import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { FcHighPriority } from "react-icons/fc";
import "./CarroVacio.css";

export const CarroVacio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {["danger"].map((variant) => (
        <center>
          <Alert key={variant} variant={variant}>
            <h1>
              ¡Hola! Tu carrito esta vacio, vuelve a Inicio y agrega tus
              tratamientos para el cuidado de tu piel.
            </h1>
          </Alert>
          <FcHighPriority className="carrVacioIcon" />
        </center>
      ))}
    </>
  );
};
