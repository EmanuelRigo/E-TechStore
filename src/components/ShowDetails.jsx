import React from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Container, Row, Col, Button } from "react-bootstrap";

function ShowDetails() {
  const {
    cliente,

    vaciarCarrito,

    setBusquedaCompra,
    busquedaCompra,
    totalVentas,
    valorEnvio,
  } = useContext(contexto);

  const navigate = useNavigate();

  const handleClick = () => {
    const venta = {
      nombre: cliente.datosEnvio.name,
      apellido: cliente.datosEnvio.surname,
      fecha: serverTimestamp(),
      compras: cliente.compras,
      envio: cliente.datosEnvio,
      metodoDePago: cliente.formasDePago,
      estaPago: (cliente.estaPagado = true),
      total: totalVentas,
      valorEnvio: valorEnvio,
    };

    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, venta);

    pedido
      .then((res) => {
        setBusquedaCompra(res.id);
      })
      .then(console.log("busquedaCompra"))
      .catch((err) => {
        console.log(err);
      });
    vaciarCarrito();
    navigate("/buy");
  };

  console.log(busquedaCompra);

  return (
    <>
      <Container className="bg-light rounded flex-1">
        <Row>
          <Col md={6}>
            <p>
              {cliente.datosEnvio.name} {cliente.datosEnvio.surname}
            </p>
            <p>{cliente.datosEnvio.address}</p>
            <p>${totalVentas} </p>
          </Col>
          <Col md={6}>
            {cliente.compras.map((item) => {
              return (
                <p key={item.id}>
                  {item.title} {item.cantidad}
                </p>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleClick}>confirmar compra</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShowDetails;
