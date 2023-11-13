import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { Container, Row, Col, Button } from "react-bootstrap";

function ShowDetails() {
  const { cliente, sumarUsuario, vaciarCarrito, setEstaPagado } =
    useContext(contexto);
  console.log(cliente);
  console.log(cliente.datosEnvio.name);

  const handleClick = () => {
    const venta = {
      nombre: cliente.datosEnvio.name,
      apellido: cliente.datosEnvio.surname,
      fecha: serverTimestamp(),
      compras: cliente.compras,
      envio: cliente.datosEnvio,
      metodoDePago: cliente.formasDePago,
      estaPago: (cliente.estaPagado = true),
    };

    console.log(venta.fecha);

    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, venta);

    pedido
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => {
        console.log(err);
      });
    vaciarCarrito();
  };

  return (
    <>
      <Container className="bg-light rounded flex-1">
        <Row>
          <Col md={6}>
            <p>
              {cliente.datosEnvio.name} {cliente.datosEnvio.surname}
            </p>
            <p>{cliente.datosEnvio.address}</p>
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
            <Link onClick={handleClick} to={"/buy"}>
              confirmar compra
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShowDetails;
