import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";
import { IdAlert } from "../IdAlert/IdAlert";

const InputFormu = () => {
  const { cartList } = useCartContext();

  const [dataForm, setDataForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmail1Change = (e) => {
    setEmail1(e.target.value);
    setDataForm({ ...dataForm, email1: e.target.value });
  };

  const handleEmail2Change = (e) => {
    setEmail2(e.target.value);
    setDataForm({ ...dataForm, email2: e.target.value });
  };

  const crearOrden = (evt) => {
    evt.preventDefault();

    if (email1 != email2) {
      setError("Correo no coinciden");
      return;
    }

    setError("");

    const orden = {};

    orden.buyer = dataForm;

    orden.items = cartList.map(({ nombre, id, precio }) => ({
      nombre,
      id,
      precio,
    }));

    const db = getFirestore();
    const queryOrden = collection(db, "ordenes");

    addDoc(queryOrden, orden).then((resp) => console.log(resp));
  };

  return (
    <Form onSubmit={crearOrden}>
      <Form.Group className="mb-3" controlId="formularioPersona">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={dataForm.nombre}
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
        />

        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          value={dataForm.apellido}
          placeholder="Ingresa tu apellido"
          onChange={handleChange}
        />

        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="telefono"
          value={dataForm.telefono}
          placeholder="Ingresa tu número de telefono"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formularioCorreo">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control
          type="text"
          name="correo"
          value={email1}
          placeholder="Ingresa tu correo electronico"
          onChange={handleEmail1Change}
        />
        <Form.Label>Validar Correo</Form.Label>
        <Form.Control
          type="text"
          name="validarCorreo"
          value={email2}
          placeholder="Valida tu correo electronico"
          onChange={handleEmail2Change}
        />
      </Form.Group>
      <center>
        <Button variant="primary" type="submit">
          Ingresar
          {/*           <IdAlert />
           */}{" "}
        </Button>
      </center>
    </Form>
  );
};

export default InputFormu;
