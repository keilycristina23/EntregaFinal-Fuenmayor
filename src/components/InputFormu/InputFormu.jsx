import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";

const InputFormu = () => {
  const { cartList, borrarProducto, vaciarCarrito, precioTotal } =
    useCartContext();

  const [dataForm, setDataForm] = useState({
    name: "",
    apellido: "",
    telefono: "",
    correo: "",
    validarCorreo: "",
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  console.log(dataForm);
  const crearOrden = (evt) => {
    evt.preventDefault();

    const orden = {};

    orden.buyer = dataForm;

    orden.items = cartList.map(({ name, id, precio }) => ({
      name,
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
          value={dataForm.correo}
          placeholder="Ingresa tu correo electronico"
          onChange={handleChange}
        />
        <Form.Label>Validar Correo</Form.Label>
        <Form.Control
          type="text"
          name="validarCorreo"
          value={dataForm.validarCorreo}
          placeholder="Valida tu correo electronico"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export default InputFormu;
