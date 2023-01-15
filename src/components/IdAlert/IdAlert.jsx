import Alert from "react-bootstrap/Alert";
import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";

import "./IdAlert.css";

export const IdAlert = ({ id }) => {
  return (
    <>
      {["secondary"].map((variant) => (
        <center>
          <div className="buyorderdiv">
            <Alert key={variant} variant={variant}>
              Tu orden de compra es:
              <br></br>#{id}
              <br></br>
              Tu compra se ha generado ¡SATISFACTORIAMENTE!
            </Alert>
            <FcLikePlaceholder className="compraIcon" />
          </div>
        </center>
      ))}
    </>
  );
};
