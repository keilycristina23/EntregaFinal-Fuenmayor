import React from "react";

export const CarroVacio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>¡Hola! El carro de compra esta vacio.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <link to="/">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Ir a Inicio
            </Button>
          </link>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
};
